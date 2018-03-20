import React from 'react';
import { shallow } from 'enzyme';
import { ListContainer } from 'Containers';

describe('ListContainer', () => {
	test('Should exists', () => {
		const wrapper = shallow(<ListContainer />);

		expect(wrapper.exists()).toBe(true);
	});
});
