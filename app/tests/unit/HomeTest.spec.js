import { mount, createLocalVue, shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'
import vuetify from 'vuetify'
import VueRouter from 'vue-router'
import Vue from 'vue'



describe('News', () => {
    let wrapper;
    beforeEach(() => { 
        Vue.use(vuetify)
        wrapper = mount(Home, {
            created() {
                this.$vuetify.lang = {
                  t: () => {},
                };
              this.$vuetify.theme = { dark: false };
            }
        });
    });  

  it('check if news cards render', () => {
      expect(wrapper.find('.background').exists()).toBe(true)
      expect(wrapper.find('#bg').exists()).toBe(true)
      expect(wrapper.find('#logo').exists()).toBe(true)
  })
})