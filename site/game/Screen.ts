import { Canvas, customElement } from 'thimble'
import { Input } from './Input'
import { Background } from './Background'
import { Tiles } from './Tiles'
import { Ground } from './Ground'
import { Camera } from './Camera'

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
        this.show(new Camera()) // everything translated goes after Camera
        this.show(new Tiles())
        this.show(new Ground())
    }
}
