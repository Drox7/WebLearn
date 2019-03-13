var http = require('http');

var server = new http.Server();

server.listen(1337, '192.168.40.1');

server.on('request', function(req, res) {
  res.end("<div>Hel<div>");
});