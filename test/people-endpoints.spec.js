const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../modules/app/app');
const store = require('../store');

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