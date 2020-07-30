var http = require('http');

//create a server object
http.createServer(function(req, res) {
    res.write('Hello World!'); //write a response to the client 
    res.end();
}).listen(7000); //server object listening on port 7000