const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../src/app/app');
const store = require('../src/store');

describe('People endpoints', () => {

	describe('GET /api/people', () => {
		it('Returns status 200', () => {
			return supertest(app)
				.get('/api/people')
				.expect(200)
				.then(res => {
					expect(res.body).to.be.an('array');
					expect(res.body.length).to.be.greaterThan(0);
				});
		});
	});

	describe('POST /api/people', () => {
		it('Adds a new name to the list and returns the name', () => {
			let newName = {
				name: 'Test McTesterson'
			};

			return supertest(app)
				.post('/api/people')
				.send(newName)
				.expect(201, `new addition: ${newName.name}`);
		});
	});

});