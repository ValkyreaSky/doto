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

export { filterTodos };
