import { join, resolve } from 'path'

Bun.serve({
    port: 3000,
    fetch(request) {
        const { pathname } = new URL(request.url)
        const resolvePath = pathname.replace(/\/$/, '/index.html')
        const filepath = resolve(join('./site', `.${resolvePath}`))
        const file = Bun.file(filepath)
        if (!file.size) {
            return new Response('Not Found', { headers: { 'Content-type': 'text/plain' } })
        }
        return new Response(Bun.file(filepath))
    },
})
