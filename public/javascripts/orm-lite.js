var express = require('express');
var pg = require('pg');
var Pool = require('pg').Pool;
var client;
var router = express.Router();

//Function Inititalize Database Connection
function initialize(callback){
	var conString = ({database:'ormmiddleware'});
	client = new pg.Client(conString);
	client.connect();
	
}	
exports.initialize = initialize;	

//Function for Find All
function findAll(callback){
    return (client.query('select * from test_user',function(error,result){
		console.log("****FindALL***")
	}));
}
exports.findAll = findAll;

//Function for Find BY ID
function findByID(param,callback){
    return (client.query('select * from test_user WHERE id= '+param,function(error,result){
		console.log("****FindBYID***")
	}));
}
exports.findByID = findByID;



