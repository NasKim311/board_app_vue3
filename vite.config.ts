import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import { loadEnv } from 'vite';

// Vite에서 환경 체크
const env = loadEnv(process.env.NODE_ENV, process.cwd());
const isProduction = env.MODE === 'production';

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

    // 'define'에서 import.meta.env를 수정할 필요 없음
    // 대신 .env 파일을 통해 BASE_API를 설정하고, 자동으로 import.meta.env.BASE_API를 사용할 수 있음
});
