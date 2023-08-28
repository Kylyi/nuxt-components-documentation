// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@unocss/nuxt'],
  components: {
    dirs: [
      { path: './components/**', pathPrefix: false },
      { path: './libs', pathPrefix: false }
    ],
  },
  unocss: { preflight: false }
})
