const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../src/app/app');
const store = require('../src/store');

describe('People endpoints', () => {

    describe('GET /api/people', () => {
        it('Returns status 200', () => {
            let expectedPeople = store.people;

            return supertest(app)
                .get('/api/people')
                .expect(200)
        })
    })

})