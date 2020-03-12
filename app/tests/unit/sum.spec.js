/**
 * Just the sum.test.js
 */
import { shallowMount } from '@vue/test-utils'

const sum = require('../../srv/javascript/sum');
	test('adds 1 + 2 to equal 3', () => {
		expect(sum(1,2)).toBe(3);
	});