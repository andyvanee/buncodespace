import { Canvas, Drawable, TickSpec } from 'thimble'
import { Vector } from 'thimble/Vector'
import { collision } from './map'

const zero = new Vector()

export class Camera extends Drawable {
    offset = new Vector()
    speed = 0.2
    mapSize = new Vector(collision[0].length * 64, collision.length * 64)
    interactionSum = 0
    interactionNotice = false

    constructor() {
        super()
    }

    tick(tick: TickSpec, screen: Canvas) {
        const { width, height } = screen
        const constraint = this.mapSize.subtract(new Vector(width, height))

        if (screen.input.action('left')) {
            this.offset.x += this.speed * tick.deltaTime
            this.recordInteraction(tick)
        }
        if (screen.input.action('right')) {
            this.offset.x -= this.speed * tick.deltaTime
            this.recordInteraction(tick)
        }
        if (screen.input.action('up')) {
            this.offset.y += this.speed * tick.deltaTime
            this.recordInteraction(tick)
        }
        if (screen.input.action('down')) {
            this.offset.y -= this.speed * tick.deltaTime
            this.recordInteraction(tick)
        }
        this.offset = this.offset.invert().constrain(constraint).invert()
    }

    recordInteraction(tick: TickSpec) {
        if (this.interactionNotice) return
        this.interactionSum += tick.deltaTime
        if (this.interactionSum > 800) {
            const event = new CustomEvent('interaction')
            window.dispatchEvent(event)
            this.interactionNotice = true
        }
    }

    draw(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
        const offset = this.offset.round()
        context.translate(...offset.xy)
    }
}
