const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/react',
    createProxyMiddleware({
      target: 'http://localhost:8085', //스프링 부트에 설정된 포트 번호
      changeOrigin: true,
    })
  );
};