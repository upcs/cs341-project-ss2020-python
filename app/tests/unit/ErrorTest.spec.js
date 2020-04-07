import { mount, createLocalVue, shallowMount } from '@vue/test-utils'
import Error from '@/views/Error.vue'
import vuetify from 'vuetify'
import VueRouter from 'vue-router'
import Vue from 'vue'



describe('News', () => {
    let wrapper;
    beforeEach(() => { 
        Vue.use(vuetify)
        wrapper = mount(Error, {
            propsData: {
                messasge: 'A1B2C3'
            },
            created() {
                this.$vuetify.lang = {
                  t: () => {},
                };
              this.$vuetify.theme = { dark: false };
            }
        });
    });  

  it('check if text passed through prop is generated', () => {
      expect(wrapper.find('A1B2C3').exists()).toBe(true)
  });

});