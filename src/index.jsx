// React Library and Redux Provider
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './styles/main.scss';

// Two main containers
import { ListContainer, ListsContainer } from 'Containers';

// Create Redux store
import configureStore from './store/configureStore';
const store = configureStore();

import { getTodos } from './actions/actions';

store.dispatch(getTodos());



const jsx = (
	<Provider store={store}>
		<div className='container'>
			<ListsContainer />
			<ListContainer />
		</div>
	</Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
