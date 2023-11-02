import { Input as BaseInput } from 'thimble'

export class Input extends BaseInput {
    keyMap = {
        jump: ['Space', 'ArrowUp'],
        crouch: ['ArrowDown'],
    }
}
