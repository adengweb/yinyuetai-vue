'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      //axios域代理，解决axios跨域问题
      '/api': {
        target: 'http://localhost'//开发环境地质
        // ,pathRewrite: {
        //   '^/api': '/src/api/' //路径重写
        // }
      }
    },

    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-
    useEslint: true,
    showEslintErrorsInOverlay: false,

    devtool: 'cheap-module-eval-source-map',

    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',

    /**
     * Source Maps productionGzip
     */
    productionSourceMap: false,
    devtool: '#source-map',

    productionGzip: true,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
