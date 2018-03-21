import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { searchTextReducer, showCompletedReducer, todosReducer, listsReducer } from 'Reducers';

export default () => {
	const store = createStore(
		combineReducers({
			lists: listsReducer,
			searchText: searchTextReducer,
			showCompleted: showCompletedReducer,
			todos: todosReducer
		}),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
		applyMiddleware(thunk)
	);

	return store;
};

