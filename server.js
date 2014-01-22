var http = require('http');

function start(){
	http.createServer(function(req, res){
		res.writeHead(200, {"Content-Type": "text/plain"});
		res.write("Hello World");
		res.end();
	}).listen(8000);
	console.log('listening on port 8000...');
};

exports.start = start;