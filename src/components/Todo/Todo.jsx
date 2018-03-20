import React from 'react';
import moment from 'moment';

const Todo = (props) => {
	const { id, text, completed, createdAt, completedAt } = props;
	
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
			<input type="checkbox" checked={completed} onChange={() => props.onToggle(id)}/>
			<p>{text}</p>
			<p>{renderDate()}</p>
		</div>
	);
};

export default Todo;
