export interface KeyMap {
    [key: string]: string[]
}

export class Input {
    root = window
    buffer = new Set<string>()
    keysPressed = new Set<string>()

    keyMap: KeyMap = {}

    constructor() {
        this.root.addEventListener('keydown', (event) => {
            Object.entries(this.keyMap).forEach(([action, keys]) => {
                if (keys.includes(event.code)) {
                    this.buffer.add(action)
                    this.keysPressed.add(action)
                }
            })
        })

        this.root.addEventListener('keyup', (event) => {
            Object.entries(this.keyMap).forEach(([action, keys]) => {
                if (keys.includes(event.code)) {
                    this.buffer.delete(action)
                    this.keysPressed.delete(action)
                }
            })
        })
    }

    action(code: string) {
        return this.keysPressed.has(code)
    }

    actionNow(code: string) {
        return this.buffer.has(code)
    }

    tick() {
        this.buffer = new Set<string>()
    }
}
