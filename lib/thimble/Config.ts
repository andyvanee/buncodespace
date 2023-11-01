const state = { logging: false }

export const Config = {
    get logging() {
        return state.logging
    },
    set logging(value: boolean) {
        state.logging = value
    },
}
