import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/actions';


export class TodoAdd extends Component {
	handleSubmit = (e) => {
		e.preventDefault();

		const inputText = this.textInput.value;

		if (inputText.length > 0) {
			this.textInput.value = '';
			this.props.dispatch(addTodo(inputText));
		} else {
			this.textInput.focus();
		}
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input ref={(input) => { this.textInput = input; }} type="text" />
					<button>Add</button>
				</form>
			</div >
		);
	}
}

export default connect()(TodoAdd);
