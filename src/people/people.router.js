const express = require('express');
const json = require('body-parser').json();

const People = require('./people.service');

const router = express.Router();

router.get('/', (req, res) => {
	// Return all the people currently in the queue.
	let data = JSON.stringify(People.get());
	return res.send(data);
});

router.post('/', json, (req, res) => {
	// Add a new person to the queue.
  let { person } = req;
  People.enqueue(person);
});

module.exports = router;
