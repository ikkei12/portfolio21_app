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
          'https://00f74ba44b3e87e265a91295e577e965eb42136732-apidata.googleusercontent.com/download/storage/v1/b/portfolio21-56e7e.appspot.com/o/ogp%2Fthumb.png?jk=AFshE3VWjMG2FUeEIPdzv6QVrTsKBUl0IZCo4IVe8HL_GGjiz_KjCnsI4Z7TCCsJHwXOIBQusOgaXqFCzWiP9OTGFyzK9Zm9TZnrYcVMto2ne6ZZtdF1x9HOf028GbygH0WID_SxlfttI9s-wNTrcFfwuuj959gUUgm5N7vNqhg2enssF3NIGGXgleCv0zuTjd82a5-nJUh9GXjjFhheVM6hKaH2xXCzFufX173hJdye7-VtsXSC4yqmUbhS1S6so7C6o9GQoCcW6712Brh8elfhdtfiELRly_QMCdDmw2A0wFsoUDo15RO8_-LvMKvz9W_CLrPv1oP1-noSlwstKNkLFWop-zmWkkbz64jpTxJ2TIS_57evFuVui6Yq6TodET4jU5UShh56Y0spNqzeCu1XBCjafBOEbqImSWQew_YLm7eDtMv551A04FyPb2Pu47HazuKotqoIc1KcdZ5mSgVag0SDlQPNYI56g4yQ87JJ6FlLwSnDpzFBHzvVlsh1HT_A_HWDryL_a4XkH2Y1qLzYqdoj1UBcOvnV8Fc4JfnSgLfyo4f-wRfxnwmwBuEQrtzWeZOaAsDToVWs4NfQXIPkUPXJJb0nBFOMOHKYsHhWzy4HNUNEgFCXFOo5AU6Zg5OQqoXnn7rW_l6JAJTNRMUrqxDWN7t5jnvq7zes7-jUHveuIsN30895YikDm0BYegY1fSragTcRJh2jrWgqHNuTgFYwifnKPKFzWd9h2njanKy06G2Ql9XVaN9UPSznlX3AVcDQTelgHIas7wpilyoiGbpdhRux4Z7l82cfG1Qe2N3cnvRokf7ov5ZMwNu7ZjZg1W6G9YQFD_r3-ZEB7LEEuXFyTrwPfWxx_NWzrOEeB_07rnMLnVaCNRXxYNgxWxKV-57A4iatXA&isca=1',
      },
      { name: 'twitter:title', content: "1keiuu's portfolio" },
      {
        name: 'twitter:description',
        content: "Ikkei Harashima's Portfolio",
      },
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
          wordsPerMinute: 700,
        })

        document.readingTime = time
      }
    },
  },
}
