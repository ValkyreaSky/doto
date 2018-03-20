import React, { Component } from 'react';

class TodoAdd extends Component {
	handleSubmit = (e) => {
		e.preventDefault();

		const inputText = this.refs.input.value;

		if (inputText.length > 0) {
			this.refs.input.value = '';
			this.props.handleAddTodo(inputText);
		} else {
			this.refs.input.focus();
		}
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input ref="input" type="text" />
					<button>Add</button>
				</form>
			</div >
		)
	}
}

export default TodoAdd;
