import React, { Component } from 'react';
import { Todo } from 'Components';
import { connect } from 'react-redux';
import { filterTodos } from '../../api/TodoApi';

export class TodoList extends Component {
	render() {
		const { todos, showCompleted, searchText } = this.props;		
	
		const renderTodos = () => {
			if (todos.length === 0) {
				return <p>nothung</p>;
			} else {
				return filterTodos(todos, showCompleted, searchText	).map((todo) => {
					return <Todo key={todo.id} {...todo} />;
				});
			}
		};

		return (
			<div>
				{renderTodos()}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		todos: state.todos,
		showCompleted: state.showCompleted,
		searchText: state.searchText
	};
};


export default connect(mapStateToProps)(TodoList);
