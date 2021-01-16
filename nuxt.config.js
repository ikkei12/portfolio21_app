const envPath = 'config/.env'
require('dotenv').config({ path: envPath })
export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  server: {
    port: 3300,
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "1keiuu's portfolio",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: "Ikkei Harashima's Portfolio",
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: "1keiuu's portfolio",
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'サイトのURL' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: "Ikkei Harashima's portfolio 2021",
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://storage.googleapis.com/portfolio21-56e7e.appspot.com/profile/avatar.jpg',
      },
      { name: 'twitter:title', content: "1keiuu's portfolio" },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@1keiuu' },
    ],
    htmlAttrs: { lang: 'ja' },
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    { src: '~/assets/scss/global.scss', lang: 'scss' },
    { src: '~/assets/scss/variables.scss', lang: 'scss' },
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/composition-api',
    '@/plugins/axios',
    '@/plugins/vue-awesome-swiper',
    '@/plugins/vue-scrollto',
    '@/plugins/firebase',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxt/content',
    '@nuxtjs/dayjs',
    '@nuxtjs/style-resources',
    [
      'nuxt-lazy-load',
      {
        defaultImage: '/lazy_thin.png',
      },
    ],
  ],
  styleResources: {
    scss: ['@/assets/scss/utilities.scss', '@/assets/scss/variables.scss'],
  },
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css',
      },
    },
  },
  dayjs: {
    locales: ['en', 'ja'],
    defaultLocale: 'ja',
  },
  dotenv: {
    filename: envPath,
  },
  // NOTE: Firebase Hostingではenvが設定できない(?)のでfunctions等を利用する必要がある
  env: {
    SITE_URL: process.env.SITE_URL,
    STORAGE_URL: process.env.STORAGE_URL,
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  hooks: {
    'content:file:beforeInsert': (document) => {
      if (document.extension === '.md') {
        const { time } = require('reading-time')(document.text, {
          wordsPerMinute: 500,
        })

        document.readingTime = time
      }
    },
  },
}
