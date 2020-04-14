import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import vueFuse from 'vue-fuse'

Vue.config.productionTip = false;
window.$ = require('jquery');
window.JQuery = require('jquery');

new Vue({
  vuetify,
  router,
  vueFuse,
  render: h => h(App)
}).$mount('#app')