 var express = require('express');

//morgan allows us to log info on the server side
var morgan = require('morgan');

var hostname = 'localhost';
var port = 3000;

var app = express();

//here we told express that we'll use morgan for log
// 'dev' is a pre-formatted form to display something by morgan.
app.use(morgan('dev'));

//In case eof express this is already built-in
//I means thet the public foldercontains all the files that'll serve as static files for this server
//__dirname gives the capability to run the server fromm anywhere 
app.use(express.static(__dirname + '/public'));

//this is a shortcut via which the express automatically registers to the server
//this is too long in node.js http
//i.e. no need of .createServer() method thereafter
app.listen(port, hostname, function(){
	
  console.log(`Server running at http://${hostname}:${port}/`);

});