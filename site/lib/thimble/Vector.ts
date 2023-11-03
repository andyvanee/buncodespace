interface XY {
    x: number
    y: number
}

type XandY = [x: number, y: number]

type VectorConstructor = [XY] | XandY | []

export class Vector {
    x: number
    y: number

    constructor(...args: VectorConstructor) {
        const [arg0, arg1] = args
        if (typeof arg0 === 'number' && typeof arg1 === 'number') {
            this.x = arg0
            this.y = arg1
        } else if (typeof arg0 == 'object') {
            this.x = arg0.x
            this.y = arg0.y
        } else {
            this.x = 0
            this.y = 0
        }
    }

    get xy() {
        return [this.x, this.y] as [number, number]
    }

    round() {
        return new Vector(Math.round(this.x), Math.round(this.y))
    }

    constrain(other: Vector) {
        return new Vector(Math.min(other.x, Math.max(this.x, 0)), Math.min(other.y, Math.max(this.y, 0)))
    }

    invert() {
        return new Vector(0 - this.x, 0 - this.y)
    }

    add(other: Vector) {
        return new Vector(this.x + other.x, this.y + other.y)
    }

    mult(other: Vector) {
        return new Vector(this.x * other.x, this.y * other.y)
    }

    subtract(other: Vector) {
        return new Vector(this.x - other.x, this.y - other.y)
    }

    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }

    normalize() {
        const factor = 1 / this.length
        return new Vector(this.x * factor, this.y * factor)
    }

    get id() {
        const x = Math.round(this.x)
        const y = Math.round(this.y)
        return `${x}:${y}`
    }
}
