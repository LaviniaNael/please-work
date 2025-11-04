import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.tsx',
            ],
            buildDirectory: 'build',
            refresh: true,
        }),
        react(),
        tailwindcss(),
        wayfinder({
            formVariants: true,
        }),
    ],
    esbuild: {
        jsx: 'automatic',
    },
    ssr: {
        noExternal: ['react-phone-number-input', 'libphonenumber-js']
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks: (id) => {
                    // React core - always needed
                    if (id.includes('react') || id.includes('react-dom')) {
                        return 'react-vendor';
                    }
                    // Animation libraries
                    if (id.includes('framer-motion')) {
                        return 'animation-vendor';
                    }
                    // Utility libraries
                    if (id.includes('lucide-react') || id.includes('clsx') || id.includes('tailwind-merge')) {
                        return 'utils-vendor';
                    }
                    // Swiper library
                    if (id.includes('swiper')) {
                        return 'swiper-vendor';
                    }
                    // Inertia and Laravel specific
                    if (id.includes('@inertiajs') || id.includes('laravel-vite-plugin')) {
                        return 'inertia-vendor';
                    }
                    // Phone input libraries
                    if (id.includes('libphonenumber') || id.includes('react-phone-number-input')) {
                        return 'phone-vendor';
                    }
                    // Other vendor libraries
                    if (id.includes('node_modules')) {
                        return 'vendor';
                    }
                },
                // Optimize asset names for better caching
                assetFileNames: (assetInfo) => {
                    // Split CSS by type for better caching
                    if (assetInfo.name?.endsWith('.css')) {
                        return 'assets/css/[name]-[hash][extname]';
                    }
                    return 'assets/[name]-[hash][extname]';
                },
                chunkFileNames: 'assets/js/[name]-[hash].js',
                entryFileNames: 'assets/js/[name]-[hash].js',
            }
        },
        // Optimize chunk size
        chunkSizeWarningLimit: 500,
        // Enable aggressive minification
        minify: 'esbuild',
        // Disable source maps for production (smaller bundle)
        sourcemap: false,
        // Enable CSS code splitting for lazy-loaded components
        cssCodeSplit: true,
        // More aggressive CSS minification
        cssMinify: 'lightningcss',
        // Optimize assets - inline small files
        assetsInlineLimit: 4096,
        // Target modern browsers for smaller bundles
        target: 'es2020',
        // Reduce module preload polyfill
        modulePreload: {
            polyfill: false,
        },
    },
    // Optimize dependencies
    optimizeDeps: {
        include: [
            'react',
            'react-dom',
            '@inertiajs/react',
            'framer-motion',
            'lucide-react',
            'sonner',
            'clsx',
            'tailwind-merge',
            'react-phone-number-input',
            'libphonenumber-js'
        ]
    },
    resolve: {
        alias: {
            'prop-types': 'prop-types/prop-types.js'
        }
    },
    // Performance optimizations
    server: {
        hmr: {
            overlay: false
        }
    },
});
