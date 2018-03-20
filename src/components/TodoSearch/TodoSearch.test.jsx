import React from 'react';
import { shallow, mount } from 'enzyme';
import { TodoSearch } from 'Components/TodoSearch/TodoSearch';

describe('TodoSearch', () => {
	test('Should exists', () => {
		const wrapper = shallow(<TodoSearch />);

		expect(wrapper.exists()).toBe(true);
	});

	test('Should call onSearch prop on input change', () => {
		const onSearchSpy = jest.fn();
		const wrapper = mount(<TodoSearch dispatch={onSearchSpy} />);

		wrapper.instance().searchText.value = '123';
		wrapper.find('input').at(0).simulate('change');

		expect(onSearchSpy).toHaveBeenLastCalledWith({
			type: 'SET_SEARCH_TEXT',
			searchText: '123'
		});
	});

	test('Should call onSearch prop on checkbox change', () => {
		const onSearchSpy = jest.fn();
		const wrapper = mount(<TodoSearch dispatch={onSearchSpy} />);
		
		wrapper.instance().showCompletedCheckbox.checked = true;
		wrapper.find('input').at(1).simulate('change');

		expect(onSearchSpy).toHaveBeenLastCalledWith({
			type: 'TOGGLE_SHOW_COMPLETED'
		});
	});
});
