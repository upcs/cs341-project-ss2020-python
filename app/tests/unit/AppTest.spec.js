import { mount, createLocalVue} from '@vue/test-utils'
import App from '@/App.vue'
import Vuetify from 'vuetify'
import Vue from 'vue'

Vue.use(Vuetify)
const localVue = createLocalVue()

describe('App', () => {
    let wrapper;
    let vuetify;
    beforeEach(() => { 
        vuetify = new Vuetify()
        wrapper = mount(App, {
            localVue,
            vuetify,
            stubs: ['router-view', 'router-link'],
            propsData: {
                title: "PPP"
            }
        });
    });  

  it('check if the default app components load', () => {
      expect(wrapper.find('#titleBar').exists()).toBe(true)
      expect(wrapper.find('#searchDrawer').exists()).toBe(true)
      expect(wrapper.find('#searchDrawer').attributes().class).toContain("v-navigation-drawer--close")
  })

  it('check if the search drawer opens on click', () => {
    wrapper.find("#fuseBox").trigger('click')
    expect(wrapper.find('#searchDrawer').attributes().class).toContain("v-navigation-drawer--fixed")
  })

  it('check the search drawer closes on click', () => {
    wrapper.find("#fuseBox").trigger('click') //open
    expect(wrapper.find('#searchDrawer').attributes().class).toContain("v-navigation-drawer--fixed")
    wrapper.find("#fuseBox").trigger('click') //close
    expect(wrapper.find('#searchDrawer').attributes().class).toContain("v-navigation-drawer--close")
  })

  it('check the search drawer closes on button press', () => {
    wrapper.find("#fuseBox").trigger('click') //open
    expect(wrapper.find('#searchDrawer').attributes().class).toContain("v-navigation-drawer--fixed")
    wrapper.find('#searchCloseBtn').trigger('click') //close
    expect(wrapper.find('#searchDrawer').attributes().class).toContain("v-navigation-drawer--close")
  })
})