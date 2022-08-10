import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from 'tailwindcss';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/scss/app.scss',
                'resources/scss/auth.scss',
                'resources/js/app.js'
            ],
            refresh: true,
        }),
        tailwindcss()
    ],
    server: {
        hmr: {
            host: 'localhost',
        }
    }
});
