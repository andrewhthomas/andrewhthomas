module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Andrew H. Thomas',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Personal website for front-end developer Andrew H. Thomas' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    // Load a node module directly (here it's a SASS file)
    '~/assets/scss/main.scss'
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['@nuxtjs/axios', 'vue-scroll-reveal'],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: [
    // ssr: false to only include it on client-side
    { src: '~/plugins/vue-scroll-reveal.js', ssr: false }
  ]
}
