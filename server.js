var express = require('express');
var app = express();

app.use(express.static(__dirname + '/app'));

// use port 3000 unless there exists a preconfigured port
var port = process.env.port || 5000;

app.listen(port);