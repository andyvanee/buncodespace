import { Drawable } from 'thimble'

import { terrain } from '../assets'

const image = new Image()
image.src = terrain

export class Tiles extends Drawable {
    draw(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
        const { width, height } = canvas
        const rows = [...Array(3).keys()]
        const cols = [...Array(3).keys()]
        rows.map((row) => {
            cols.map((col) => {
                const sx = 32 * col
                const sy = 32 * row
                const [sw, sh] = [32, 32, 32]
                const [dx, dy, dw, dh] = [sx * 2, sy * 2, 64, 64]
                context.drawImage(image, sx + 32, sy + 32, sw, sh, dx + 128, dy + 128, dw, dh)
            })
        })
    }
}
