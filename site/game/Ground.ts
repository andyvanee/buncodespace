import { Drawable } from 'thimble'
import { collision } from './map'
import Settings from './Settings'
import { Vector } from 'thimble/Vector'

export class Ground extends Drawable {
    collision: Boolean[][]
    constructor() {
        super()
        this.collision = collision
        console.log({ collision })
    }
    draw(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
        const { width, height } = Settings.tiles
        const pos = new Vector()

        context.fillStyle = '#00000033'
        for (const row of this.collision) {
            pos.x = 0
            for (const col of row) {
                if (col) {
                    context.fillRect(pos.x, pos.y, width, height)
                }
                pos.x += width
            }
            pos.y += height
        }
    }
}
