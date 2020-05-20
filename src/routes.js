const express = require('express');
const routes = express.Router();

const APIRequests = require('./controllers/APIRequests');

routes.get('/acessToken', APIRequests.getAcessToken);

module.exports = routes;