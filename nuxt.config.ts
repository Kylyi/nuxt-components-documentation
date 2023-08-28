// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@unocss/nuxt'],
  components: {
    dirs: [{ path: './components', pathPrefix: false }],
  },
})
