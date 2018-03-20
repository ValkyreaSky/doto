const filterTodos = (todos, showCompleted, searchText) => {
	let filteredTodos = todos;
	
	filteredTodos = filteredTodos.filter((todo) => {
		return todo.completed === false || showCompleted;
	});

	filteredTodos = filteredTodos.filter((todo) => {
		return todo.text.toLowerCase().includes(searchText);
	});

	filteredTodos.sort((a, b) => {
		if (a.completed && !b.completed) {
			return 1;
		} else if (!a.completed && b.completed) {
			return -1;
		} else {
			return 0;
		}
	});
	
	return filteredTodos;
};

const setTodos = (todos) => {
	// if (typeof(todos) === 'array') {
	localStorage.setItem('todos', JSON.stringify(todos));
	// return todos;
	// }
};

const getTodos = () => {
	var stringTodos = localStorage.getItem('todos');
	var todos = [];

	try {
		todos = JSON.parse(stringTodos);
	} catch (e) {
		throw new Error(e);
	}
	
	return todos ? todos : [];
};

export { filterTodos, setTodos, getTodos };
