// React Library and Redux Provider
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Create Redux store
import configureStore from './store/configureStore';
const store = configureStore();


import { ListContainer } from 'Containers';

const jsx = (
	<Provider store={store}>
		<ListContainer />
	</Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
