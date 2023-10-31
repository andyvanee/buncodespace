import { BuildOutput, Serve } from 'bun'
import { join, resolve } from 'path'

export const serve = (dist: BuildOutput) => {
    const port = process.env.NODE_PORT || 3000

    const serveBuild = (request: Request) => {
        const { pathname } = new URL(request.url)
        const filepath = resolve(join('./.dist/', `.${pathname}`))
        const output = dist.outputs.find((output) => output.path == filepath)
        if (output) return new Response(output)
    }

    const serveStatic = (request: Request) => {
        const { pathname } = new URL(request.url)
        const resolvePath = pathname.replace(/\/$/, '/index.html')
        const siteFilepath = resolve(join('./site', `.${resolvePath}`))
        const file = Bun.file(siteFilepath)
        if (file.size) {
            return new Response(Bun.file(siteFilepath))
        }
    }

    const serveConfig = {
        port,
        fetch(request) {
            {
                const response = serveBuild(request)
                if (response) return response
            }
            {
                const response = serveStatic(request)
                if (response) return response
            }

            return new Response('Not Found', { headers: { 'Content-type': 'text/plain' } })
        },
    } satisfies Serve

    const server = Bun.serve(serveConfig)

    return {
        reload: (newBuild: BuildOutput) => {
            dist = newBuild
            server.reload(serveConfig)
            console.log('server reloaded', new Date())
        },
    }
}
