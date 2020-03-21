/**
 * Unit tests for contactUs page.
 * TODO: Make this work I guess?
 */

import { shallowMount } from '@vue/test-utils'
import ContactUs from './ContactUs.vue'

test('First', () => {
    //render the component
    const wrapper = shallowMount(First)

    // should not allow for `username` less than 7 characters, excludes whitespace
    wrapper.setData({ FirstName: ' '.repeat(7) })

    // assert the error is rendered
    expect(wrapper.find('.error').exists()).toBe(true)

    // update the name to be long enough
    wrapper.setData({ username: 'Lachlan' })

    // assert the error has gone away
    expect(wrapper.find('.error').exists()).toBe(false)
})