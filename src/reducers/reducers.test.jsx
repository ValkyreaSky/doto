import { searchTextReducer, showCompletedReducer, todosReducer } from './reducers';

describe('Reducerd', () => {
	describe('searchTextReducer', () => {
		test('Should set search text', () => {
			const action = {
				type: 'SET_SEARCH_TEXT',
				searchText: 'Dog'
			};
			const response = searchTextReducer('', action);
			expect(response).toBe('Dog');
		});
	});

	describe('showCompletedReducer', () => {
		test('Should toggle show completed', () => {
			const action = {
				type: 'TOGGLE_SHOW_COMPLETED'
			};

			const response = showCompletedReducer(false, action);
			expect(response).toBe(true);
		});
	});

	describe('todosReducer', () => {
		test('Should add new todo', () => {
			const action = {
				type: 'ADD_TODO',
				text: 'Some text'
			};

			const response = todosReducer([], action);
			expect(response.length).toBe(1);
			expect(response[0].text).toBe('Some text');
		});

		test('Should toggle todo completed', () => {
			const action = {
				type: 'TOGGLE_TODO',
				id: 1
			};

			const response = todosReducer([{ type: 'ADD_TODO', id: 1, text: 'Some text', completed: false}], action);
			
			expect(response[0].completed).toBe(true);
			expect(typeof(response[0].completedAt)).toBe('number');
		});
	});
});
