export const uuid = () => {
    const t = new Date().getTime().toString(32).padStart(10, '0')
    const a = Math.round(Math.random() * Number.MAX_SAFE_INTEGER).toString(32)
    const b = Math.round(Math.random() * Number.MAX_SAFE_INTEGER).toString(32)
    const rand = `${a}${b}`.padStart(16).slice(0, 16)
    return `${t}${rand}`.toUpperCase()
}
