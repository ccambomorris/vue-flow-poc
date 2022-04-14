import { defineNuxtConfig } from 'nuxt3'
import vueTypes from 'vite-plugin-vue-type-imports'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    // Server side rendering
    ssr: false,
    // App mode
    mode: 'spa',
    // Source folder
    srcDir: 'src/',
    // Styles
    // Stylesheets
    css: [
        "~/assets/scss/app.scss"
    ],
    // Build modules
    buildModules: [
        '@vueuse/nuxt',
        'vite-plugin-vue-type-imports/nuxt'
    ],
    // Runtime config
    runtimeConfig: {
        public: {
            DRAGGABLE_DEBUG: process.env.DRAGGABLE_DEBUG || true
        }
    },

    // Vite
    vite: {
        plugins: [
            vueTypes()
        ],
        // optimizeDeps: {
        //     include: ['vue', '@vueuse/core', 'd3-zoom', 'd3-selection'],
        // },
    }
})
