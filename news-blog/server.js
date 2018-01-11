var express = require('express');
var app = express();

app.use(express.static(__dirname + '/../../Spirit Legends Website'));

app.listen(3000);