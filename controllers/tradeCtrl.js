var express = require('express'),
	fs = require('fs');
var obj = JSON.parse(fs.readFileSync('./static-data/trades.json', 'utf8'));
var tradeRouter = express.Router();

// getting all item (Get verb)
tradeRouter.route('/trade')
//Post verb add new item to the list
.post(function(req,res){})
.get(function(req,res){
	res.json(obj);
});

module.exports = tradeRouter;