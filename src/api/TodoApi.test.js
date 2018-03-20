import { filterTodos } from './TodoApi';

describe('TodoApi', () => {
	
	describe('filterTodos', () => {
		var todos = [
			{
				id: 1,
				text: 'asd',
				completed: false
			},
			{
				id: 2,
				text: 'aszxcd',
				completed: true
			},
			{
				id: 3,
				text: 'zxc',
				completed: false
			}
		];

		test('Should return all items', () => {
			let filteredTodos = filterTodos(todos, true, '');

			expect(filteredTodos.length).toBe(3);
		});

		test('Should not return completed items', () => {
			let filteredTodos = filterTodos(todos, false, '');

			expect(filteredTodos.length).toBe(2);
		});

		test('Should return only todos with "a" letter inside text', () => {
			let filteredTodos = filterTodos(todos, true, 'a');

			expect(filteredTodos.length).toBe(2);
		});

		test('Should sort by completed values', () => {
			let filteredTodos = filterTodos(todos, true, '');

			expect(filteredTodos[filteredTodos.length -1].completed).toBe(true);
		});
	});
});
