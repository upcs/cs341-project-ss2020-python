const path = require('path');

module.exports = {
  outputDir: path.resolve(__dirname, './srv/public'),
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