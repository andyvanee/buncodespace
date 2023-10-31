import { BuildConfig } from 'bun';

const buildConfig: BuildConfig = {
    entrypoints: ['site/index.ts'],
    outdir: './.dist',
    publicPath: '/',
    splitting: true,
    minify: process.env.NODE_ENV === 'production',
};

export const build = async () => {
    const result = await Bun.build(buildConfig)
    if (!result.success) {
        console.error(result)
    }
    console.log(`build complete: ${result.outputs.length} files`, new Date())
    return result
}
