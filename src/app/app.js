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
    return res.status(200).send('welcome to the petful api')
})

module.exports = app
