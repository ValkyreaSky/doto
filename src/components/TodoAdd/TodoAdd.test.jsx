import React from 'react';
import { shallow, mount } from 'enzyme';
import { TodoAdd } from 'Components';

describe('TodoAdd', () => {
	test('Should exists', () => {
		const wrapper = shallow(<TodoAdd />);

		expect(wrapper.exists()).toBe(true);
	});

	test('Should call handleAddTodo prop on valid data', () => {
		const handleAddTodoSpy = jest.fn();
		const wrapper = mount(<TodoAdd handleAddTodo={handleAddTodoSpy}/>);

		wrapper.ref('input').value = '123';

		wrapper.find('form').simulate('submit', {
			preventDefault: () => { }
		});

		expect(handleAddTodoSpy).toHaveBeenLastCalledWith('123');
	});

	test('Should not call handleAddTodo prop on invalid data', () => {
		const handleAddTodoSpy = jest.fn();
		const wrapper = mount(<TodoAdd handleAddTodo={handleAddTodoSpy}/>);

		wrapper.find('form').simulate('submit', {
			preventDefault: () => { }
		});

		expect(handleAddTodoSpy).not.toHaveBeenCalled();
	});
});
