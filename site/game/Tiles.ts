import { Drawable } from 'thimble'

import { terrain } from '../assets'
import { Vector } from 'thimble/Vector'

const image = new Image()
image.src = terrain

// Tile source size
const sz = new Vector(32, 32)
// Tile dest size
const dz = new Vector(64, 64)

export class Tiles extends Drawable {
    draw(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
        const { width, height } = canvas
        const rows = [...Array(3).keys()]
        const cols = [...Array(3).keys()]
        const destOffset = new Vector(64 * 11, 128)

        rows.map((row) => {
            cols.map((col) => {
                const srcOffset = new Vector(32, 32)
                const pos = new Vector(col, row)
                const s = sz.mult(pos)
                const d = s.mult(new Vector(2, 2))
                context.drawImage(
                    image,
                    s.x + srcOffset.x,
                    s.y + srcOffset.y,
                    sz.x,
                    sz.y,
                    d.x + destOffset.x,
                    d.y + destOffset.y,
                    dz.x,
                    dz.y
                )
            })
        })
    }
}
