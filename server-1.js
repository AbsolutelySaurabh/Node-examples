//Express is a powerful node.js framework which makes it simpler to write
// write the http code modules

var express = require('express'), http = require('http');

var hostname = 'localhost';
var port = 3000;

//here we have initialised express() into the app variable
var app = express();

app.use(function ( req, res, next){

	//to print whether the request is GET or POST , etc.
	console.log(req.headers);

	//response message
	res.writeHead(200, { 'Content-Type': 'text/html' });

	//response values to be displayed by the client
    res.end('<html><body><h1>Hello World</h1></body></html>');

});

//starting hte server
var server = http.createServer(app);

server.listen(port, hostname, function(){

 console.log(`Server running at http://${hostname}:${port}/`);

});

//This short code does all the work that's why the express() is poerful for cutting the code
