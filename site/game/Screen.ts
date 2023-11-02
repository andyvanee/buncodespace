import { Canvas, customElement } from 'thimble'
import { Input } from './Input'
import { Background } from './Background'
import { Tiles } from './Tiles'

@customElement('ui-screen')
export class Screen extends Canvas {
    input: Input

    constructor() {
        super()
        this.input = new Input()
    }

    firstUpdated() {
        super.firstUpdated()
        this.context.imageSmoothingEnabled = false
        this.show(new Background())
        this.show(new Tiles())
    }
}
