import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify, {
    theme: {
        primary: '#333333',
        secondary: '#FFFFFF',
        accent: '#D3D3D3',
        error: '#f44336',
        warning: '#ff9800',
        info: '#2196f3',
        success: '#673ab7',
        }
});

export default new Vuetify({
    icons: {
        iconfont: 'mdi',
      },
})