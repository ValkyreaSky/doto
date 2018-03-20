import React from 'react';
import { shallow } from 'enzyme';
import { Todo } from 'Components';

describe('Todo', () => {
	test('Should exists', () => {
		const wrapper = shallow(<Todo />);
    
		expect(wrapper.exists()).toBe(true);
	});
});
