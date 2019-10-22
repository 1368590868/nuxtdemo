export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
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
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
  /*
   ** Global CSS
   */
  css: [
    { src: "swiper/dist/css/swiper.css" },
    'element-ui/lib/theme-chalk/index.css',
    'ant-design-vue/dist/antd.css',
    'assets/css/style.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~/plugins/vue-awesome-swiper.js", ssr: false },
    {src: '~/plugins/ElementUI', ssr: false },
    {src:'~/plugins/antd-ui.js',ssr:false},
    {src:'~/plugins/vue-initial-list.js',ssr: false}
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: false
  },
  /*
   ** Build configuration
   */
  build: {
    analyze: true,
    transpile: [/^element-ui/],
    loaders: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          'primary-color': '#41b883',
          'layout-body-background': '#fff'
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    vendor:['axios']   //多个页面使用axios  只打包一次
  },
  router:{
   
  }

}
