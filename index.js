var http = require('http');

var fs = require("fs");

const PORT=8080

var requestListener = function (req, res) {
  res.writeHead(200);

  

}


var server = http.createServer(requestListener);
server.listen(8080,function(){
	console.log("Server listening");	
});
