import { setSearchText, addTodo, toggleShowCompleted, toggleTodo } from './actions';

describe('Actions', () => { /* eslint-disable-line no-undef */
	test('Should generate search text action', () => {
		const response = setSearchText('Some text search');

		expect(response).toEqual({
			type: 'SET_SEARCH_TEXT',
			searchText: 'Some text search'
		});
	});

	test('Should generate add todo action', () => {
		const response = addTodo('Some todo text');

		expect(response).toEqual({
			type: 'ADD_TODO',
			text: 'Some todo text'
		});
	});

	test('Should generate toggle show completed action', () => {
		const response = toggleShowCompleted();

		expect(response).toEqual({
			type: 'TOGGLE_SHOW_COMPLETED'
		});
	});

	test('Should generate toggle todo action', () => {
		const response = toggleTodo(12);

		expect(response).toEqual({
			type: 'TOGGLE_TODO',
			id: 12
		});
	});
});
