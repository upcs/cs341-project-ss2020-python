import { mount, createLocalVue, shallowMount } from '@vue/test-utils'
import News from '@/views/News.vue'
import vuetify from 'vuetify'
import VueRouter from 'vue-router'
import Vue from 'vue'



describe('News', () => {
    let wrapper;
    beforeEach(() => { 
        Vue.use(vuetify)
        wrapper = mount(News, {
            created() {
                this.$vuetify.lang = {
                  t: () => {},
                };
              this.$vuetify.theme = { dark: false };
            }
        });
    });  

  it('check if news cards render', () => {
      expect(wrapper.find('#news').exists()).toBe(true)
      expect(wrapper.find('#newsCard1').exists()).toBe(true)
      expect(wrapper.find('#newsCard2').exists()).toBe(true)
      expect(wrapper.find('#newsCard3').exists()).toBe(true)
      expect(wrapper.find('#newsCard4').exists()).toBe(true)
      expect(wrapper.find('#newsCard5').exists()).toBe(true)
      expect(wrapper.find('#newsCard6').exists()).toBe(true)
  });

  test('if new tab is opened', () => {
    global.open = jest.fn();
    let btn = wrapper.find('#trimet-btn');
    btn.trigger('click');
    expect(global.open).toBeCalled();
  });

});