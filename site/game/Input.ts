import { Input as BaseInput } from 'thimble'

export class Input extends BaseInput {
    keyMap = {
        left: ['ArrowLeft', 'KeyA'],
        right: ['ArrowRight', 'KeyD'],
        up: ['ArrowUp', 'KeyW'],
        down: ['ArrowDown', 'KeyS'],
        jump: ['Space', 'ArrowUp'],
        crouch: ['ArrowDown'],
    }
}
