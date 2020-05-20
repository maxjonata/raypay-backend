const axios = require('axios');

const api = axios.create({
    baseURL: 'https://testing-fake-server.herokuapp.com/',
})

module.exports = api;