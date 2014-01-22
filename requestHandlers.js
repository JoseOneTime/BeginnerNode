var querystring = require("querystring");
var fs = require('fs');

function start(res, postData) {
	console.log("Request handler 'start' was called");
	var body = '<html>'	 +
		'<head>' +
		'<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />' +
		'</head>' +
		'<body>' +
		'<form action="/upload" enctype="multipart/form-data"'+
		'method="post">' +
		'<input type="file" name="upload">'+
		'<input type="submit" value="Upload File" />'+
		'</form>'+
		'</body>'+
		'</html>';
		res.writeHead(200, {"Content-Type": "text/html"});
		res.write(body);
		res.end();

}

function upload(res, postData) {
	console.log("Request handler 'upload' was called");
	res.writeHead(200, {"Content-Type": "text/plain"});
	res.write("You've sent the text: " + 
		querystring.parse(postData).text);
	res.end();
}

function show(res){
	console.log("Request handler 'show' was called.");
	res.writeHead(200, {"Content-Type": "image/png"});
	fs.createReadStream("./tmp/test.png").pipe(res);
}

exports.start = start;
exports.upload = upload;
exports.show = show;