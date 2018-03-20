import { createStore, combineReducers } from 'redux';
import { searchTextReducer, showCompletedReducer, todosReducer } from 'Reducers';

export default () => {
	const store = createStore(
		combineReducers({
			searchText: searchTextReducer,
			showCompleted: showCompletedReducer,
			todos: todosReducer
		}),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);

	return store;
};

