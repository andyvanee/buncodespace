import { watch } from 'fs'
import { BuildConfig, BuildOutput, Serve } from 'bun'
import { join, resolve } from 'path'

const buildConfig: BuildConfig = {
    entrypoints: ['site/index.ts'],
    outdir: './.dist',
    publicPath: '/',
    splitting: true,
    minify: process.env.NODE_ENV === 'production',
}

export const build = async () => {
    const result = await Bun.build(buildConfig)
    if (!result.success) {
        console.error(result)
    }
    console.log(`build complete: ${result.outputs.length} files`, new Date())
    return result
}

const serve = (dist: BuildOutput) => {
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
            const response = serveBuild(request) || serveStatic(request)
            if (response) return response

            return new Response('Not Found', { headers: { 'Content-type': 'text/plain' } })
        },
    } satisfies Serve

    const _server = Bun.serve(serveConfig)

    return {
        reload: (newBuild: BuildOutput) => {
            dist = newBuild
            _server.reload(serveConfig)
            console.log('server reloaded', new Date())
        },
    }
}

const server = serve(await build())

watch('./site', { recursive: true }, async (event, filename) => {
    console.log(event, filename)
    server.reload(await build())
})
