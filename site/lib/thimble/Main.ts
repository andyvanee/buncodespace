import { Node } from './Node'

let MainRef: Main | null = null

/**
 * Main is a singleton. This should be the root object of your project, and there
 * should only be one per project since it is the object that sets up the animation
 * frame loop and calls `tick()` on all tickable objects.
 */
export class Main extends Node {
    ticking = false
    clock = { startTime: 0, previousFrame: 0 }

    static get current() {
        if (!MainRef) throw new Error('Thimble not initialized')
        return MainRef
    }

    constructor() {
        super()
    }

    connectedCallback() {
        super.connectedCallback()
        if (MainRef) {
            console.warn('Multiple constructors called for Game. This component should only be attached once')
        }
        MainRef = this
        this.ticking = true
        this.clock.startTime = performance.now()
        requestAnimationFrame(() => this.gameLoop())
    }

    disconnectedCallback(): void {
        MainRef = null
        super.disconnectedCallback()
    }

    private gameLoop() {
        const tickStart = performance.now()
        const worldTime = tickStart - this.clock.startTime
        const deltaTime = tickStart - this.clock.previousFrame
        this.clock.previousFrame = tickStart
        this._tick({ deltaTime, worldTime })
        requestAnimationFrame(() => this.gameLoop())
    }
}
