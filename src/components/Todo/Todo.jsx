import React from 'react';

const Todo = (props) => {
	const { id, text } = props;
  
	return (
		<div>
			{id}. {text}
		</div>
	);
};

export default Todo;
