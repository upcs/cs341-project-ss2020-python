import { mount, createLocalVue, shallowMount } from '@vue/test-utils'
import Info from '@/views/Info.vue'
import vuetify from 'vuetify'
import Vue from 'vue'



describe('Info', () => {
    let wrapper;
    beforeEach(() => { 
        Vue.use(vuetify)
        wrapper = mount(Info, {
            created() {
                this.$vuetify.lang = {
                  t: () => {},
                };
              this.$vuetify.theme = { dark: false };
            }
        });
    });  

  it('check if information renders', () => {
      expect(wrapper.find('#info').exists()).toBe(true)
      expect(wrapper.find('#infoCard1').exists()).toBe(true)
      expect(wrapper.find('#infoCard2').exists()).toBe(true)
      expect(wrapper.find('#infoCard3').exists()).toBe(true)
      expect(wrapper.find('#pieChart').exists()).toBe(true)
  });

});
