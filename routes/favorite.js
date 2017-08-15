var express = require('express');
var FavoriteController = require('../controllers/favorite');
var api = express.Router();

api.get('/user/:name?', FavoriteController.user);

module.exports = api;