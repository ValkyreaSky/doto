import uuid from 'uuid';
import moment from 'moment';

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
				id: uuid(),
				text: action.text,
				completed: false,
				createdAt: moment().unix(),
				completedAt: undefined
			}
		];
	case 'ADD_TODOS':
		return action.todos;
	case 'REMOVE_TODO':
		return state.filter((todo) => {
			return todo.id !== action.id;
		});
	case 'TOGGLE_TODO':
		const todosArray = [...state];
		const index = todosArray.findIndex((todo) => {
			return todo.id === action.id;
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

export { searchTextReducer, showCompletedReducer, todosReducer };
