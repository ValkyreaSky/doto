// React Library and Redux Provider
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { ListContainer } from 'Containers';

// Create Redux store
import configureStore from './store/configureStore';
const store = configureStore();

import { setTodos, getTodos } from './api/TodoApi';
import { addTodos } from './actions/actions';


var initialTodos = getTodos();
store.dispatch(addTodos(initialTodos));


store.subscribe(() => {
	var state = store.getState();
	setTodos(state.todos);
});


const jsx = (
	<Provider store={store}>
		<ListContainer />
	</Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
