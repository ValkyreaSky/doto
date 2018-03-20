import React from 'react';
import { shallow } from 'enzyme';
import { TodoList } from 'Components/TodoList/TodoList';

describe('TodoList', () => {
	test('Should exists', () => {
		const wrapper = shallow(<TodoList todos={[{ id:1, text: 'Walk the dog' }]} />);
		expect(wrapper.exists()).toBe(true);
	});
  
	test('Should render one Todo component for each todo item', () => {
		const wrapper = shallow(<TodoList showCompleted={true} searchText={''} todos={[{ id: 1, text: 'Walk the dog' }, { id: 2, text: 'Play games' }]} />);
				
		expect(wrapper.find('Connect(Todo)').length).toBe(2);
	});
});
