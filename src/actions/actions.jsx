import axios from 'axios';

const setSearchText = (searchText) => {
	return {
		type: 'SET_SEARCH_TEXT',
		searchText
	};
};

const addTodo = (todo) => {
	return {
		type: 'ADD_TODO',
		todo
	};
};

const startAddTodo = (text) => {
	return (dispatch, getState) => {
		axios({
			method: 'post',
			baseURL: 'http://localhost:3000/',
			headers: {
				'Content-Type': 'application/json',
			},
			url: 'todos',
			data: {
				'text': text
			}
		}).then(res => {			
			dispatch(addTodo(res.data));
		});
	};
};



const getTodos = () => {
	return (dispatch, getState) => {
		axios({
			method: 'get',
			baseURL: 'http://localhost:3000/',
			url: 'todos',
		}).then(res => {
			dispatch(addTodos(res.data.todos));
		});
	};
};


const addTodos = (todos) => {
	return {
		type: 'ADD_TODOS',
		todos
	};
};

const removeTodo = (id) => {
	return {
		type: 'REMOVE_TODO',
		id
	};
};

const startRemoveTodo = (id) => {
	return (dispatch) => {
		axios({
			method: 'delete',
			baseURL: 'http://localhost:3000/',
			url: 'todos/' + id,
		}).then(resp => {
			dispatch(removeTodo(id));
		});
	};
};

const toggleShowCompleted = () => {
	return {
		type: 'TOGGLE_SHOW_COMPLETED'
	};
};

const toggleTodo = (id) => {
	return {
		type: 'TOGGLE_TODO',
		id
	};
};

export { setSearchText, addTodo, toggleShowCompleted, toggleTodo, removeTodo, addTodos, startAddTodo, getTodos, startRemoveTodo };
