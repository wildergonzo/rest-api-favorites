var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/user/:name?', (req, res) => {
    var name;
    req.params.name? name=req.params.name : name='guest';
    res.status(200).
        send('hello ' + name);
});

app.listen(3000, () => {
console.log('listening on port 3000');
});
