var http = require('http');
var url = require('url');

function start(route){
	http.createServer(function(req, res){
		var pathname = url.parse(req.url).pathname;
		console.log("Request for " + pathname + " received.");

		route(pathname);

		res.writeHead(200, {"Content-Type": "text/plain"});
		res.write("Hello World");
		res.end();
	}).listen(8000);
	console.log('listening on port 8000...');
};

exports.start = start;