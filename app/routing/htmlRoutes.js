// GET route to /survey which should display the survey page
//default catch all route that leads to home.html which displays the home page

const express = require('express');
const tablesList = require('../data/tables.js');
const router = express.Router();
const path = require("path");

router.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "..","public","index.html"));
    console.log("index page");
});

router.get('/tables', function(req,res){
    res.sendFile(path.join(__dirname, "../public/tables.html"));
    console.log("Tables page");
});

router.get('/reserve', function(req, res){
    res.sendFile(path.join(__dirname, "../public/reserve.html"));
    console.log("reserve page");
});

module.exports = (router);