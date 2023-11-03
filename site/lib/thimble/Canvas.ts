/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
import { css, html } from './lit'
import { Node } from './Node'
import { Drawable } from './Drawable'
import { TickSpec } from './Tick'
import { Input } from './Input'

/**
 * Thimble root class for Canvas-based interactive elements.
 */
export class Canvas extends Node {
    protected drawables: Set<Drawable> = new Set()
    protected canvas: HTMLCanvasElement
    protected context: CanvasRenderingContext2D
    input: Input
    width: number
    height: number

    static get styles() {
        return css`
            :host {
                position: relative;
                display: block;
                width: 100%;
                height: 100%;
                background-color: #000;
            }
            #screen {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }
        `
    }

    show(drawable: Drawable) {
        this.drawables.add(drawable)
    }

    hide(drawable: Drawable) {
        this.drawables.delete(drawable)
    }

    firstUpdated() {
        this.canvas = this.shadowRoot.querySelector('#screen')
        if (!this.canvas) throw new Error('No canvas rendered')
        this.context = this.canvas.getContext('2d')
        if (!this.context) throw new Error('No canvas rendering context')
        const { width, height } = this.getBoundingClientRect()
        this.width = this.canvas.width = width
        this.height = this.canvas.height = height
    }

    tick(tick: TickSpec) {
        this.drawables.forEach((item) => item.tick(tick, this))
        const { width, height } = this
        this.context.fillStyle = '#fafafa'
        this.context.fillRect(0, 0, width, height)
        this.drawables.forEach((item) => item.draw(this.canvas, this.context))
        this.input.tick()
    }

    render() {
        return html`
            <div>
                <slot name="before"></slot>
                <canvas id="screen"></canvas>
                <slot name="after"></slot>
            </div>
        `
    }
}
