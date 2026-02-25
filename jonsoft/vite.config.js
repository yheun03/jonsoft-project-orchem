import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'
import svgLoader from 'vite-svg-loader'

// https://vite.dev/config/
export default defineConfig({
    base: '/jonsoft-project-orchem/',
    plugins: [vue(), svgLoader()],
    server: {
        fs: {
            allow: [path.resolve(__dirname, '..')],
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@root': path.resolve(__dirname, '..'),
        },
    },
})