// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    base: '/future/',
    server: {
        port: 5173,
        open: true,
        proxy: {
            '/api': {
                target: 'https://api.github.com',
                changeOrigin: true,
                rewrite: function (path) { return path.replace(/^\/api/, ''); },
                headers: {
                    Authorization: "Bearer ".concat(process.env.VITE_GITHUB_TOKEN),
                },
            },
        },
    },
    resolve: {
        alias: {
            app: '/src/app',
            pages: '/src/pages',
            widgets: '/src/widgets',
            entities: '/src/entities',
            shared: '/src/shared',
        },
    },
});
