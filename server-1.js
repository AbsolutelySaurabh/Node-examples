var http = require('http');

var hostname = 'localhost';
var port = 3000;

//create a server
var server = http.createServer(function(req, res){

	console.log(req.headers);

	res.writeHead(200, {'Content-Type': 'text/html'});

	res.end('<html><body><h1> Hello World</h1></body></html>');

})

//run the server
server.listen(port, hostname, function(){

	//the below is  ... ` ... sign and not the ...''... sign
	console.log(`Server running at http://${hostname}:${port}/`);

});