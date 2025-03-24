import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

const isProduction = process.env.NODE_ENV === 'production';

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue(), vueDevTools()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    server: {
        port: 3000,
        open: true,
        strictPort: true,
    },
    define: {
        'process.env': {
            NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            BASE_API: JSON.stringify(isProduction ? '' : 'http://localhost:8080'),
        },
    },
});
