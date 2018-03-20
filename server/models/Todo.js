const mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
	text: {
		type: String,
		require: true,
		minlength: 3,
		trim: true
	},
	completed: {
		type: Boolean,
		default: false
	},
	completedAt: {
		type: Date,
		default: null
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

module.exports = { Todo };