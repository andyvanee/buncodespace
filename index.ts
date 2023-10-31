import { watch } from 'fs'
import { build } from './server/build'
import { serve } from './server/serve'

const server = serve(await build())

watch('./site', { recursive: true }, async (event, filename) => {
    console.log(event, filename)
    server.reload(await build())
})
