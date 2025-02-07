// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxtjs/supabase",
    "nuxt-gtag",
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxtjs/i18n",
    "@nuxt/test-utils/module"
  ], devtools: { enabled: true },

  app: {
    head: {
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" }
      ]
    }
  },

  runtimeConfig: {
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_KEY: process.env.SUPABASE_KEY,
    public: {
      BASE_URL: process.env.BASE_URL,
      API_HOST: process.env.API_HOST,
      API_VERSION: process.env.API_VERSION
    }
  },

  compatibilityDate: "2025-02-07",

  nitro: {
    routeRules: {
      "/proxy/image/**": {
        proxy: { to: `https://instagram.fkhh1-2.fna.fbcdn.net/**` }
      },
      "/service/api/**": {
        proxy: { to: `${process.env.API_HOST}/api/**` }
      }
    },
    compressPublicAssets: true
  },

  eslint: {
    config: {
      stylistic: {
        indent: 2,
        semi: true,
        quotes: "double",
        commaDangle: "never"
      }
    }
  },

  gtag: {
    id: "G-GPL2ZB1YT2"
  },

  i18n: {
    baseUrl: `https://${process.env.BASE_URL}`,
    locales: [
      { code: "en", language: "en-US" },
      { code: "ja", language: "ja-JP" },
      { code: "zh", language: "zh-TW" }
    ],
    detectBrowserLanguage: false,
    strategy: "prefix_except_default",
    defaultLocale: "zh",
    vueI18n: "./i18n.config.ts"
  },

  supabase: {
    redirect: false,
    redirectOptions: {
      login: "/",
      callback: "/confirm",
      exclude: []
    }
  }
});
