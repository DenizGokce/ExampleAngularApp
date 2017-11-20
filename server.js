/**
 * Module dependencies.
 */
var express = require('express');
var http = require('http');

var app = express();

// all environments
app.set('port', process.env.PORT || 8000);

app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

app.use(function(request, response, next){
    //this intercepts all requests
    //usefull for logging and stuff
    next();
});
app.use(express.static(__dirname+"/public"));

const forceSSL = function() {
    return function (req, res, next) {
        if (req.headers['x-forwarded-proto'] !== 'https') {
            return res.redirect(
                ['https://', req.get('Host'), req.url].join('')
            );
        }
        next();
    }
}
// Instruct the app
// to use the forceSSL
// middleware

// ...
app.use(forceSSL());

http.createServer(app).listen(app.get('port'), function(){
    console.log('Kibana server listening on port ' + app.get('port'));
});

