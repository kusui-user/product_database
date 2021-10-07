export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'product_database',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/reset.scss',
    '@/assets/scss/common.scss',
    '@/assets/scss/app.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/style-resources",
  ],

  styleResources: {
    scss: ['@/assets/scss/_colors.scss', '@/assets/scss/_variables.scss'],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-webfontloader',

    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyC9uThYJ0Q7z_nHwDq6xQGLf9xqiNrT0Ac",
          authDomain: "test-20211207.firebaseapp.com",
          projectId: "test-20211207",
          storageBucket: "test-20211207.appspot.com",
          messagingSenderId: "245387650161",
          appId: "1:245387650161:web:7bec3ac1ef6426b159a7d0",
          measurementId: '<measurementId>'
        },
        services: {
          auth: true, // Just as example. Can be any other service.
          firestore:true,
          storage:true,
          database:true,
        }
      }
    ]
  ],

  webfontloader: {
    google: {
      families: ['Roboto', 'Noto+Sans+JP']
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
