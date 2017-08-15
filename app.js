var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var api = require('./routes/favorite');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/api', api);

module.exports = app;
