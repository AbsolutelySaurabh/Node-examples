var http =  require('http')
var fs = require('fs') //fs is for file system
var path = require('path')//path is for specifyting the file paths

var hostname = 'localhost';
var port = 3000;

var server = http.createServer(function(req, res){

	console.log('Request for '+ req.url + ' by method'+ req.method);

	//check the method is for GET / POST/PUT/DELETE
	if(req.method == 'GET'){

		var fileUrl;

		//it means land the user to the 'index.html' when typed just site name or homepage
		if (req.url == '/'){

		 fileUrl = '/index.html';

		}else{

			fileUrl = req.url;
		}


			var filePath = path.resolve('./public' + fileUrl);

			//this is the file extension
			var fileExt = path.extname(filePath);

			if(fileExt == '.html'){

				//if the file extension is '.html'
				//check whether the file exists or not
				fs.exists(filePath, function(exists){

					//if not exusts then show the error code and just return
					if(!exists){

						//if the file not exists..send the 404 response code
						res.writeHead(404, {'Content-Type': 'text/html' });
						res.end('<html><body><h1> Error 404: '+ fileUrl+ 'not found</h1></head></html');

						return;
					}

					//now if the file exists show the success response code 200 and other response

					res.writeHead(200, {'Content-Type': 'text/html'});

					//finally read the filePath data stream and 'pipe' it into the response.
					fs.createReadStream(filePath).pipe(res);

				});
			
			}else{

				//if not an .html file then send any error code
				res.writeHead(404, { 'Content-Type': 'text/html' });
				res.end('<html><body><h1>Error 404: ' + fileUrl +' not a HTML file</h1></body></html>');
			
			}



	}else{

		//404 code is for method not supported
		res.writeHead(404, {'Content-Type': 'text/html'});
		res.end('<html><body><h1>Error 404: '+ req.method+'is not supported</h1></body></html>');

	}

});

server.listen(port, hostname, function(){

	console.log(`Server running at http://${hostname}: ${port}/ `);

});