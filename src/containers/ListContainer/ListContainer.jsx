import React, { Component } from 'react';
import { TodoList, TodoAdd, TodoSearch } from 'Components';

class ListContainer extends Component {
	render() {
		return (
			<div>
				<TodoSearch />
				<TodoList />
				<TodoAdd />
			</div>
		);
	}
}

export default ListContainer;
