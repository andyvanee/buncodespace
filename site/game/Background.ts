import { Drawable } from 'thimble'

export class Background extends Drawable {
    draw(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
        const { width, height } = canvas
        context.fillStyle = '#000'
        context.fillRect(0, 0, width, height)
    }
}
