var express = require("express");
var app = express();
var http = require("http").Server(app);

app.use('/', require('./routes/index'));


var port = process.env.PORT || 3000;
http.listen(port, function(){
	console.log('listening on *:' + port);
});


