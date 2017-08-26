var express = require('express');
var FavoriteController = require('../controllers/favorite');
var api = express.Router();

api.get('/test/:name?', FavoriteController.test);
api.get('/user/:id', FavoriteController.getUser);
api.post('/user', FavoriteController.setUser);
api.put('/user', FavoriteController.updateUser);
api.delete('/user/:id', FavoriteController.deleteUser);

module.exports = api;
