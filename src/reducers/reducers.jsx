import uuid from 'uuid';
import moment from 'moment';

const listsReducer = (state = '', action) => {
	return [
		{
			id: 123,
			name: 'List Pierwsza'
		},
		{
			id: 1234,
			name: 'List Druga'
		},
		{
			id: 12345,
			name: 'List Trzecia'
		}
	];
};

const searchTextReducer = (state = '', action) => {
	switch (action.type) {
	case 'SET_SEARCH_TEXT':
		return action.searchText;
	default:
		return state;
	}
};

const showCompletedReducer = (state = false, action) => {
	switch (action.type) {
	case 'TOGGLE_SHOW_COMPLETED':
		return !state;
	default:
		return state;
	}
};

const todosReducer = (state = [], action) => {
	switch (action.type) {
	case 'ADD_TODO':
		return [
			...state,
			{
				...action.todo
			}
		];
	case 'ADD_TODOS':
		return action.todos;
	case 'REMOVE_TODO':
		return state.filter((todo) => {
			return todo._id !== action.id;
		});
	case 'TOGGLE_TODO':
		const todosArray = [...state];
		const index = todosArray.findIndex((todo) => {
			return todo._id === action.id;
		});
		
		todosArray[index].completed = !todosArray[index].completed;
		if (todosArray[index].completed) {
			todosArray[index].completedAt = moment().unix();
		} else {
			todosArray[index].completedAt = undefined;
		}
		
		return todosArray;
	default:
		return state;
	}
};

export { searchTextReducer, showCompletedReducer, todosReducer, listsReducer };
