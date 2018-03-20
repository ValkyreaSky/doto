import React from 'react';
import { shallow, mount } from 'enzyme';
import { TodoAdd } from 'Components/TodoAdd/TodoAdd';

describe('TodoAdd', () => {
	test('Should exists', () => {
		const wrapper = shallow(<TodoAdd />);

		expect(wrapper.exists()).toBe(true);
	});

	test('Should call handleAddTodo prop on valid data', () => {
		const handleAddTodoSpy = jest.fn();
		const wrapper = mount(<TodoAdd dispatch={handleAddTodoSpy}/>);

		// console.log(wrapper.instance().textInput);
		
		wrapper.instance().textInput.value = '123';

		wrapper.find('form').simulate('submit', {
			preventDefault: () => { }
		});

		expect(handleAddTodoSpy).toHaveBeenLastCalledWith({
			type: 'ADD_TODO',
			text: '123'
		});
	});

	test('Should not call handleAddTodo prop on invalid data', () => {
		const handleAddTodoSpy = jest.fn();
		const wrapper = mount(<TodoAdd dispatch={handleAddTodoSpy}/>);

		wrapper.find('form').simulate('submit', {
			preventDefault: () => { }
		});

		expect(handleAddTodoSpy).not.toHaveBeenCalled();
	});
});
