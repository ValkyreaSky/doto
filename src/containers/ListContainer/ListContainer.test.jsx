import React from 'react';
import { shallow } from 'enzyme';
import { ListContainer } from 'Containers';

describe('ListContainer', () => {
	test('Should exists', () => {
		const wrapper = shallow(<ListContainer />);

		expect(wrapper.exists()).toBe(true);
	});

	test('Should add Todo to todos state on handleAddTodo', () => {
		const wrapper = shallow(<ListContainer />);

		wrapper.instance().handleAddTodo('Test');

		const length = wrapper.state('todos').length;

		expect(wrapper.state('todos')[length - 1].text).toBe('Test');
		expect(typeof(wrapper.state('todos')[length - 1].createdAt)).toBe('number');
		expect(typeof(wrapper.state('todos')[length - 1].completedAt)).toBe('undefined');
	});

	test('Should toggle completed value when handleToggle called', () => {
		const todo = {
			id: 12,
			text: 'Sample text',
			completed: false,
			createdAt: 100,
			completedAt: undefined
		};

		const wrapper = shallow(<ListContainer />);
		wrapper.setState({todos: [todo]});

		wrapper.instance().handleToggle(12);

		expect(wrapper.state('todos')[0].completed).toBe(true);
		expect(typeof(wrapper.state('todos')[0].completedAt)).toBe('number');
	});

	test('Should toggle completed value when handleToggle called', () => {
		const todo = {
			id: 12,
			text: 'Sample text',
			completed: true,
			createdAt: 100,
			completedAt: 200
		};

		const wrapper = shallow(<ListContainer />);
		wrapper.setState({todos: [todo]});

		wrapper.instance().handleToggle(12);

		expect(wrapper.state('todos')[0].completed).toBe(false);
		expect(typeof(wrapper.state('todos')[0].completedAt)).toBe('undefined');
	});
});
