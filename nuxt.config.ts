// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: '', // can be overridden by NUXT_PUBLIC_API_BASE environment variable
      FIREBASE_API_KEY: process.env.NUXT_FIREBASE_API_KEY,
      FIREBASE_AUTH_DOMAIN: process.env.NUXT_FIREBASE_AUTH_DOMAIN,
      FIREBASE_PROJECT_ID: process.env.NUXT_FIREBASE_PROJECT_ID,
      FIREBASE_STORAGE_BUCKET: process.env.NUXT_FIREBASE_STORAGE_BUCKET,
      FIREBASE_MESSAGING_SENDER_ID: process.env.NUXT_FIREBASE_MESSAGING_SENDER_ID,
      FIREBASE_APP_ID: process.env.NUXT_FIREBASE_APP_ID,
      FIREBASE_MEASUREMENT_ID: process.env.NUXT_FIREBASE_MEASUREMENT_ID,
    }
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", '@pinia/nuxt', '@nuxtjs/i18n', "nuxt-aos"],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  i18n: {
    locales: [
      { code: 'en', name: 'English', iso: 'en-US', file: 'en.js' },
      { code: 'ru', name: 'Русский', iso: 'ru-RU', file: 'ru.js' },
      { code: 'az', name: 'Azərbaycanca', iso: 'az-AZ', file: 'az.js' },
    ],
    lazy: true,
    langDir: 'translation',
    defaultLocale: 'az',
  },
  // vite: {
  //   optimizeDeps: {
  //     exclude: ['@ckeditor/ckeditor5-*'],
  //   },
  // }
})