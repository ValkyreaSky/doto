import React, { Component } from 'react';
import { TodoList, TodoAdd, TodoSearch } from 'Components';
import uuid from 'uuid';
import moment from 'moment';
import { filterTodos } from '../../api/TodoApi';

class ListContainer extends Component {
	state = {
		showCompleted: false,
		searchText: '',
		todos: [
			{
				id: uuid(),
				text: 'Walk the dog',
				completed: false,
				createdAt: 123,
				completedAt: undefined
			},
			{
				id: uuid(),
				text: 'Clean the yard',
				completed: true,
				createdAt: 60,
				completedAt: 600
			},
			{
				id: uuid(),
				text: 'Burn the house',
				completed: true,
				createdAt: 1230,
				completedAt: 2340
      },
      {
        id: uuid(),
				text: 'Play video games',
				completed: false,
				createdAt: 12323,
				completedAt: undefined
      }
		]
  }
  
  handleAddTodo = (text) => {
    this.setState({
			todos: [
				...this.state.todos,
				{
					id: uuid(),
					text,
					completed: false,
					createdAt: moment().unix(),
					completedAt: undefined
				}
			]
		});
	}

	handleToggle = (id) => {		
		const todosArray = [...this.state.todos];
		const index = todosArray.findIndex((todo) => {
			return todo.id === id
		});
		
		todosArray[index].completed = !todosArray[index].completed;
		if (todosArray[index].completed) {
			todosArray[index].completedAt = moment().unix();
		} else {
			todosArray[index].completedAt = undefined;
		}

		this.setState({
			todos: todosArray
		});
	};
	
	handleSearch = (showCompleted, searchText) => {
		this.setState({
			showCompleted,
			searchText: searchText.toLowerCase()
		});
	}

	render() {
		const { todos, showCompleted, searchText } = this.state;    
		const filteredTodos = filterTodos(todos, showCompleted, searchText);

		return (
			<div>
				<TodoSearch onSearch={this.handleSearch} />
				<TodoList todos={filteredTodos} onToggle={this.handleToggle} />
				<TodoAdd handleAddTodo={this.handleAddTodo} />
			</div>
		);
	}
}

export default ListContainer;
