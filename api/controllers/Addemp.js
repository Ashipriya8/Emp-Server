
var express = require('express');
var cassandra = require('cassandra-driver');


const { Client } = require('@elastic/elasticsearch')


const db_elasticsearch_emp = require('../../db_elasticsearch_emp'); 

var elastic = new Client(db_elasticsearch_emp);
const db_cassandra_emp = require('../../db_cassandra_emp'); 
var client = new cassandra.Client(db_cassandra_emp);

const router = express.Router();


//function to addemp
exports.AddEmp = (req, res) => {
    console.log('working')
}