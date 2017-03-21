var express = require('express'),
	bodyParser = require('body-parser');
var app =  express();
var port =  process.env.PORT || 8000;


var tradeRouter =  require('./controllers/tradeCtrl');

// parse application/json
app.use(bodyParser.json()); //middleware read the body and parse the json object that we can understand 

//To serve static files such as images, CSS files, and JavaScript files
//use the express.static built-in middleware function in Express
app.use(express.static(__dirname + '/'));

//setting up route
app.get('/*', function(req,res){
	res.sendFile(__dirname + '/public/index.html'); //// load the single view file (angular will handle the page changes on the front-end
});

//api routing

app.use('/api', tradeRouter);

//express strat listiening of route
app.listen(port, function(){
	console.log('Server Started on:' + port);
});

