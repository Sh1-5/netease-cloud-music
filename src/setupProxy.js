const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://101.43.52.162:3000',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    })
  )
}
