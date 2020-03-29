const path = require('path');
const PROXY = 'http://localhost:3000'

module.exports = {
  outputDir: path.resolve(__dirname, './srv/public'),
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