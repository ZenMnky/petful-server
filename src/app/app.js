const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const app = express();

const { NODE_ENV } = require('../config');
const peopleRouter = require('../people/people-router');
const petsRouter = require('../pets/pets-router');

const morganOption = NODE_ENV === 'production' ? 'tiny' : 'common';

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());
app.use(function(req, res, next) {
    // Solution from: https://www.positronx.io/express-cors-tutorial/
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(express.json());
app.use('/api/people', peopleRouter);
app.use('/api/pets', petsRouter);

app.use('/', (req,res) => {
	let msg = `
    Welcome to the Petful API.
    The functional endpoints are '/api/people' and '/api/pets'.
    'api/people' - accepts GET request || POST request, with 'name: a-name-here' in the body.
    'api/pets' - accepts GET request.
    'api/pets/:pet' - where :pet === cat || dog. accepts DELETE request.`;
	return res
		.status(200)
		.send(msg);
});

app.use(function errorHandler(error, req, res, next) {
    let response;
  
    response = { error: { message: 'server error' } };
    console.error(error);
  
    res.status(500).json(response);
  });

module.exports = app;
