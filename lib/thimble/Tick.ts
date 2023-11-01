import { uuid } from './uuid'

const TickableObjects: Map<string, WeakRef<Tickable>> = new Map()

export interface TickSpec {
    deltaTime: number
    worldTime: number
}

export interface Tickable {
    _tick: (_: TickSpec) => void
    tick: (_: TickSpec, context?: any) => void
    registerTickable: () => void
    unRegisterTickable: () => void
    getTickables: () => Tickable[]
}

const getTickables = () => {
    return [...TickableObjects.values()].map((x) => (x ? x.deref() : null)).filter((x) => x)
}

export function tickable<T extends { new (...args: any[]): Tickable }>(constructor: T) {
    return class extends constructor {
        uuid: string
        registerTickable: () => void
        unRegisterTickable: () => void

        constructor(...any: any) {
            super(...any)
            this.uuid = uuid()
            this.registerTickable = () => TickableObjects.set(this.uuid, new WeakRef(this))
            this.unRegisterTickable = () => TickableObjects.delete(this.uuid)
            this.getTickables = getTickables
        }
    }
}
