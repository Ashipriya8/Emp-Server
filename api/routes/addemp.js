//dependencies
var express = require('express');
var cassandra = require('cassandra-driver');
//var uuidv4 = require('uuid/v4');

const addEmpController = require('../controllers/Addemp');

const db_cassandra_emp = require('../../db_cassandra_emp'); 
const router = express.Router();

var client = new cassandra.Client(db_cassandra_emp);

//sign in route
//router.post('/signin', signinController.signin);

//route to create user account
router.post('/Addemp', addEmpController.AddEmp);

module.exports = router