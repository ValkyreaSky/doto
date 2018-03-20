const express = require('express');
const bodyParser = require('body-parser');
const server = express();

const { mongoose } = require('./database/mongose');
const { Todo } = require('./models/Todo');
const { User } = require('./models/User');

const port = process.env.port || 3000;

// Set up middleware
server.use(bodyParser.json());

// CRUD operations
server.post('/todos', (req, res) => {
	var todo = new Todo({
		text: req.body.text
	});

	todo.save().then((doc) => {
		res.send(doc);
	}, (e) => {
		res
			.status(400)
			.send(e);
	});
});

server.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});