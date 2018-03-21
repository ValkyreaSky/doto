import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { toggleTodo, removeTodo, startRemoveTodo } from '../../actions/actions';

export const Todo = (props) => {
	const { _id, text, completed, createdAt, completedAt, dispatch } = props;
	
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
		<div className='todo'>
			<input
				type="checkbox"
				checked={completed}
				onChange={() => {dispatch(toggleTodo(_id));}}
				className="todo__checkbox"
			/>
			<div className="todo__info">
				<p className="todo__text">{text}</p>
				<p className="todo__date">{renderDate()}</p>
			</div>
			<button className="todo__button" onClick={() => dispatch(startRemoveTodo(_id))}>Remove</button>
		</div>
	);
};


export default connect()(Todo);
