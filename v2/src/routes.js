const express = require('express');
const VideoController = require('./Controllers/VideoController');
const routes = express.Router();

routes.get('/', (req, res) => {res.send('OI')})
routes.get('/history', VideoController.indexHistory)

module.exports = routes;