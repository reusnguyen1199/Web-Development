var express = require('express');
var userRoutes = require('./routes/users.route');
var authRoutes = require('./routes/auth.route');
var cookieParser = require('cookie-parser');

var app = express();
var port = 3000;

// SETUP express app
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
// => to use req.body

// SETUP view engine and folder
app.set('view engine', 'pug');
app.set('views', './views');

// SETUP cookie parser
app.use(cookieParser());

// SETUP root route
app.use('/', userRoutes);
app.use('/auth', authRoutes);	

// SETUP static files
app.use(express.static('public'));		// for demo, go to: http://localhost:3000/docs/TSL_C2.pdf	

app.listen(port, function(){
	console.log('Server listening on port ' + port);
});

