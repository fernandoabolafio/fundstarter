var http = require('http');

var fs = require("fs");

const PORT = process.env.PORT || 8080

var requestListener = function (req, res) {
  res.writeHead(200);

  fs.open("index.html",'r', function(err, fd){
    if (err){
        throw (err);
    }else{


    fs.stat("index.html", function(err,stats){
        var size = stats["size"];
        var buffer = new Buffer(size);
        fs.read(fd, buffer, 0, size, 0, function(err,bytesRead,buf){
          res.end(buf.toString('utf8'));
        })

    });

  }//end else

})//end fs.open

  

}


var server = http.createServer(requestListener);
server.listen(PORT,function(){
	console.log("Server listening");	
});
