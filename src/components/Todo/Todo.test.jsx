import React from 'react';
import { shallow } from 'enzyme';
import { Todo } from 'Components';

describe('Todo', () => {
	test('Should exists', () => {
		const wrapper = shallow(<Todo />);
    
		expect(wrapper.exists()).toBe(true);
	});

	test('Should call onToggle prop with id on click', () => {
		const onToggleSpy = jest.fn();

		const wrapper = shallow(<Todo id={12} text={'Sample'} completed={false} onToggle={onToggleSpy} />);
		wrapper.find('input').simulate('change');

		expect(onToggleSpy).toHaveBeenCalledWith(12);
	});
});
