var express = require("express");
var app = express();
var http = require("http").Server(app);
var exphbs = require('express-handlebars');
var path = require('path');

app.use('/', require('./routes/index'));

// view engine setup - currently uses Handlebars
app.set('views', path.join(__dirname, 'views'));

var hbs = exphbs.create({
	helpers: require('./helpers/handlebars.js'),
	extname: '.hbs',
	layoutsDir: './views/',
	defaultLayout: 'layout'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

var port = process.env.PORT || 3000;
http.listen(port, function(){
	console.log('listening on *:' + port);
});


