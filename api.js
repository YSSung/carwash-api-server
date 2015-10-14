var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var fs = require('fs');
var app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/v1/list/:type', function(req, res) {
	var dataName = req.param('type');
	var filePath = 'data/' + dataName + '.json';
	var contents = fs.readFileSync(filePath);
	res.json(JSON.parse(contents));
});

app.post('/v1/add/:type', function(req, res) {
	var dataName = req.param('type');
	var filePath = 'data/' + dataName + '.json';
	var contents = fs.readFileSync(filePath);
	console.log(req.body.name);
});

app.post('/v1/edit/:id', function(req, res) {
	var dataName = req.param('type');
	console.log(req.body);
});

var server = app.listen(3001, function() {

});