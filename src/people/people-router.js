const express = require('express');
const People = require('./people-service');
const peopleRouter = express.Router();

peopleRouter
	.route('/')
	.get((req, res) => {
		// Return all the people currently in the queue.
		let data = JSON.stringify(People.allTheFolks());
		return res
			.status(200)
			.send(data);
	})
	.post((req, res) => {
		// Add a new person to the queue.
		
		let { name } = req.body;
		People.enqueue(name);
		let allTheFolks = People.allTheFolks();
		
		res
			.status(201)
			.send(`new addition: ${allTheFolks[allTheFolks.length - 1]}`)
	});

module.exports = peopleRouter;
