var http = require('http');

var fs = require("fs");

const PORT = process.env.PORT || 8080

var requestListener = function (req, res) {
  res.writeHead(200);
  var filename = "index.html";
  var buf = fs.readFileSync(filename, "utf8");

  res.end(buf);
  

}


var server = http.createServer(requestListener);
server.listen(PORT,function(){
	console.log("Server listening");	
});
