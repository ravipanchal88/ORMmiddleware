var express = require('express');
var Seq = require('../public/javascripts/orm-lite.js');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res,next) {
  res.render('index');
});

//Get All Function 
router.get('/displayAll', function(req, res,next) {
	Seq.initialize();
	Seq.findAll().then(function(result){
		res.render('displayAll',{
		results : result.rows
		});
	});
});

//Get by iD  Function 
router.get('/displaybyId', function(req, res,next) {
	Seq.initialize();
	Seq.findByID('1').then(function(result){
		res.render('displaybyId',{
		results : result.rows
		});
	});
});

module.exports = router;
