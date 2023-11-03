import { Drawable } from 'thimble'

import { terrain } from '../assets'
import { Vector } from 'thimble/Vector'

const image = new Image()
image.src = terrain

// Tile source size
const sourceSize = new Vector(32, 32)
// Tile dest size
const destSize = new Vector(64, 64)

export class Tiles extends Drawable {
    draw(_: HTMLCanvasElement, context: CanvasRenderingContext2D) {
        const rows = [...Array(3).keys()]
        const cols = [...Array(3).keys()]
        const destOffset = new Vector(64 * 11, 128)

        rows.map((row) => {
            cols.map((col) => {
                const sourceOffset = new Vector(32, 32)
                const tileId = new Vector(col, row)
                const s = sourceSize.mult(tileId)
                const d = s.mult(new Vector(2, 2))
                context.drawImage(
                    image,
                    s.x + sourceOffset.x,
                    s.y + sourceOffset.y,
                    sourceSize.x,
                    sourceSize.y,
                    d.x + destOffset.x,
                    d.y + destOffset.y,
                    destSize.x,
                    destSize.y
                )
            })
        })
    }
}
