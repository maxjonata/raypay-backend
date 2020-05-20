const express = require('express');
const routes = express.Router();

const APIRequests = require('./controllers/APIRequests');

routes.get('/accessToken', APIRequests.getAccessToken);

module.exports = routes;