import { Canvas } from './Canvas'
import { TickSpec, Tickable, tickable } from './Tick'

/**
 * Drawable
 */
@tickable
export class Drawable implements Tickable {
    uuid: string
    registerTickable: () => void
    unRegisterTickable: () => void
    getTickables: () => Tickable[]

    /**
     * The primary game engine callback function. Called on every animation frame.
     * @param tick Provides world time and delta time
     */
    tick(tick: TickSpec, screen: Canvas) {}

    /**
     * Internal utility function - this should only be called by `MainRef`
     */
    _tick(tick: TickSpec) {
        for (const item of this.getTickables()) {
            item.tick(tick)
        }
    }

    /**
     * Utility function for canvas called on each tick
     */
    draw(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {}
}
