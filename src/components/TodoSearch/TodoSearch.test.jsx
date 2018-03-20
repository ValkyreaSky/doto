import React from 'react';
import { shallow, mount } from 'enzyme';
import { TodoSearch } from 'Components';

describe('TodoSearch', () => {
	test('Should exists', () => {
		const wrapper = shallow(<TodoSearch />);

		expect(wrapper.exists()).toBe(true);
	});

	test('Should call onSearch prop on input change', () => {
		const onSearchSpy = jest.fn();
		const wrapper = mount(<TodoSearch onSearch={onSearchSpy} />);

		wrapper.ref('searchText').value = '123';
		wrapper.find('input').at(0).simulate('change');

		expect(onSearchSpy).toHaveBeenLastCalledWith(false, '123');
	});

	test('Should call onSearch prop on checkbox change', () => {
		const onSearchSpy = jest.fn();
		const wrapper = mount(<TodoSearch onSearch={onSearchSpy} />);
		
		wrapper.ref('showCompleted').checked = true;
		wrapper.find('input').at(1).simulate('change');

		expect(onSearchSpy).toHaveBeenLastCalledWith(true, '');
	});
});
