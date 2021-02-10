const express = require('express');

const Pets = require('./pets-service');
const People = require('../people/people-service');

const petsRouter = express.Router();

petsRouter
	.route('/')
	.get((req,res) => {
		// Return all pets currently up for adoption.
		let firstPets = Pets.get();
		return res
			.status(200)
			.json(firstPets);
	});


petsRouter
	.route('/:pet') // either 'cat' or 'dog'
	.delete((req, res) => {
		// Remove a pet from adoption.
		let { pet } = req.params;
		let adoption = {};
		try {
			adoption.pet = Pets.dequeue(pet);
			adoption.owner = People.dequeue();
		} catch (error) {
			return res
				.status(400)
				.json(error.message);
		}

		return res
			.status(200)
			.json(adoption);

	});

module.exports = petsRouter;
