const PROXY = 'http://localhost:3000'

module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: PROXY,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  "pluginOptions": {
    "express": {
      "shouldServeApp": true,
      "serverDir": "./srv"
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}