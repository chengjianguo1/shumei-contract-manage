const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://192.168.0.34:8504", // 金鹏
      changeOrigin: true,
      pathRewrite: {
        "^/api": ""
      }
    })
  );
};