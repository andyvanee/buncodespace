import { Config } from './Config'
import { TickSpec, Tickable, tickable } from './Tick'
import { LitElement, html, property } from './lit'
import { uuid } from './uuid'

@tickable
export class Node extends LitElement implements Tickable {
    @property({ type: String, reflect: false })
    uuid: string
    registerTickable: () => void
    unRegisterTickable: () => void
    getTickables: () => Tickable[]

    latestLog = -1

    constructor() {
        super()
        this.uuid = uuid()
    }

    connectedCallback() {
        super.connectedCallback()
        this.registerTickable()
    }

    disconnectedCallback() {
        this.unRegisterTickable()
        super.disconnectedCallback()
    }

    /**
     * The primary game engine callback function. Called on every animation frame.
     * @param tick Provides world time and delta time
     */
    tick(tick: TickSpec) {}

    /**
     * Internal utility function - this should only be called by `MainRef`
     */
    _tick(tick: TickSpec) {
        if (Config.logging) this.tickLog(tick)

        for (const item of this.getTickables()) {
            item.tick(tick)
        }
    }

    /**
     * Rate-limited logging. Prints once every 5 seconds
     */
    private tickLog(tick: TickSpec) {
        const gen = Math.floor(tick.worldTime / 5000)
        if (gen != this.latestLog) {
            console.log({ tick, resident: this.getTickables().length })
        }
        this.latestLog = gen
    }

    render() {
        return html`<div></div>`
    }
}
