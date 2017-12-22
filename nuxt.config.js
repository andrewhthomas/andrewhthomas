const BabiliPlugin = require('babili-webpack-plugin')
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nunito:200,300,400,600,700,800,900|Open+Sans:400,400i,700,700i' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['@nuxtjs/axios', 'vue-scroll-reveal', 'vue-awesome'],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (!ctx.dev) {
        config.plugins = config.plugins.filter((plugin) => plugin.constructor.name !== 'UglifyJsPlugin')
        config.plugins.push(new BabiliPlugin())
      }
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
    { src: '~/plugins/vue-scroll-reveal.js', ssr: false },
    { src: '~/plugins/vue-awesome.js', ssr: false },
    { src: '~plugins/buefy', ssr: false }
  ],
  generate: {
    routes: [
      '/work/acculturated',
      '/work/the-gifford-lectures'
    ]
  }
}
