module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'Andrew H. Thomas',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Personal website for front-end developer Andrew H. Thomas'
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://use.typekit.net/vbg2jll.css'
      }
    ]
  },
  css: [
    { src: '~/assets/scss/styles.scss', lang: 'scss' },
    { src: 'font-awesome/scss/font-awesome.scss', lang: 'scss' }
  ],
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#3B8070'
  },
  /*
   ** Build configuration
   */
  build: {
    extend(config, ctx) {
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
    {src: '~/plugins/vue-scroll-reveal', ssr: false}
  ],
  modules: ['@nuxtjs/apollo'],
  apollo: {
    clientConfigs: {
      default: '~/apollo/client-configs/default.js'
    }
  }
}
