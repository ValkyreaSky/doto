import React from 'react';
import { shallow } from 'enzyme';
import { ListContainer } from 'Containers';

describe('ListContainer', () => {
	test('Should exists', () => {
		const wrapper = shallow(<ListContainer />);

		expect(wrapper.exists()).toBe(true);
	});

	test('Should render ListContainer', () => {
		const wrapper = shallow(<ListContainer />);
		
		expect(wrapper.find('Connect(TodoSearch)').length).toBe(1);
		expect(wrapper.find('Connect(TodoList)').length).toBe(1);
		expect(wrapper.find('Connect(TodoAdd)').length).toBe(1);
	});
});
