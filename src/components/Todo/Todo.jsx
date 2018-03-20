import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { toggleTodo, removeTodo } from '../../actions/actions';

export const Todo = (props) => {
	const { id, text, completed, createdAt, completedAt, dispatch } = props;
	
	const renderDate = () => {
		let message, timestamp;

		if (completedAt) {
			message = 'Completed at';
			timestamp = completedAt;
		} else {
			message = 'Created at';
			timestamp = createdAt;
		}

		return `${message} ${moment.unix(timestamp).format('MMM Do Y @ h:mm a')}`;
	};

	return (
		<div>
			<hr />
			<input
				type="checkbox"
				checked={completed}
				onChange={() => {dispatch(toggleTodo(id));}}
			/>
			<p>{text}</p>
			<p>{renderDate()}</p>
			<button onClick={() => dispatch(removeTodo(id))}>Remove</button>
			<hr />
		</div>
	);
};


export default connect()(Todo);
