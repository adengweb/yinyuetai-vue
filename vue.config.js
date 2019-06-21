module.exports = {
  //axios域代理，解决axios跨域问题
  baseUrl: '/yinyuetai/api/',
  devServer: {
      proxy: {
          '/yytApi': {
              target: 'http://127.0.0.1:8080/yinyuetai/api/',
              changeOrigin: true,
              ws: true,
              pathRewrite: {

              }
          }
      }
  }
}