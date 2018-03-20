const mongoose = require('mongoose');
const { Todo } = require('./models/Todo');

mongoose.Promise = global.Promise; // Set up Promises for mongoose
mongoose.connect('mongodb://localhost:27017/TodoApp');

var newTodo = new Todo({
	text: 'Learn nodejs'
});
var otherTodo = new Todo({
	text: 'Learn nodejs',
	completed: false,
	completedAt: 123
});

otherTodo.save().then(() => {
	console.log(`Save new todo: ${newTodo}`);
}, (e) => {
	console.log('Unable to save new todo');
});