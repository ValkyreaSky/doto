import React, { Component } from 'react';
import { TodoList, TodoAdd, TodoSearch } from 'Components';

class ListContainer extends Component {
	state = {
		showCompleted: true,
		searchText: '',
		todos: [
			{
				id: 1,
				text: 'Walk the dog'
			},
			{
				id: 2,
				text: 'Clean the yard'
			},
			{
				id: 3,
				text: 'Burn the house'
      },
      {
        id: 4,
        text: 'Play video games'
      }
		]
  }
  
  handleAddTodo = (text) => {
    alert('New Todo', text);
	}
	
	handleSearch = (showCompleted, searchText) => {
		this.setState({
			showCompleted,
			searchText
		});
	}

	render() {
    const { todos } = this.state;    

		return (
			<div>
				<TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={todos} />
				<TodoAdd handleAddTodo={this.handleAddTodo} />
			</div>
		);
	}
}

export default ListContainer;
