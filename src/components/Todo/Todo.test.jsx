import React from 'react';
import { shallow } from 'enzyme';
import { Todo } from 'Components/Todo/Todo';

describe('Todo', () => {
	test('Should exists', () => {
		const wrapper = shallow(<Todo />);
    
		expect(wrapper.exists()).toBe(true);
	});

	test('Should dispatch TOGGLE_TODO action on click', () => {
		const onToggleSpy = jest.fn();

		const wrapper = shallow(<Todo id={12} text={'Sample'} completed={false} dispatch={onToggleSpy} />);
		wrapper.find('input').simulate('change');

		expect(onToggleSpy).toHaveBeenCalledWith({
			type: 'TOGGLE_TODO',
			id: 12
		});
	});
});
