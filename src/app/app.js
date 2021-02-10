const express = require('express')
const cors = require('cors')
const helmet = require('helmet');
const app = express()
const peopleRouter = require('../people/people-router');
const petsRouter = require('../pets/pets-router');

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use('/api/people', peopleRouter)
app.use('/api/pets', petsRouter)

app.use('/', (req,res) => {
    let msg = `
    Welcome to the Petful API.
    The functional endpoints are '/api/people' and '/api/pets'.
    'api/people' - accepts GET request || POST request, with 'name: a-name-here' in the body.
    'api/pets' - accepts GET request.
    'api/pets/:pet' - where :pet === cat || dog. accepts DELETE request.`
    return res
        .status(200)
        .send(msg)
})

module.exports = app
