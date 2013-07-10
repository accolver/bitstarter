var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.engine('html', require('ejs').renderFile);



app.get('/', function(request, response) {
  response.render(__dirname + "/index.html");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
