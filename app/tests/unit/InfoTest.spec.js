import { mount, createLocalVue, shallowMount } from '@vue/test-utils'
import Info from '@/views/Info.vue'
import vuetify from 'vuetify'
import VueRouter from 'vue-router'
import Vue from 'vue'



describe('News', () => {
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
//   it('testing resize handler', () => {
   
//   });

  test('testing resize handler', () => {
    global.innerWidth = 500;
    wrapper.vm.resizeHandler();
    expect(wrapper.vm.smallWidth).toBe(true);
    global.innerWidth = 1500;
    wrapper.vm.resizeHandler();
    expect(wrapper.vm.smallWidth).toBe(false);
    wrapper.destroy();
  });

});
