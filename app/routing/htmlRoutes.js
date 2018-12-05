// GET route to /survey which should display the survey page
//default catch all route that leads to home.html which displays the home page

const express = require('express');
const tablesList = require('../data/friends.js');
const router = express.Router();
const path = require("path");

router.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "..","public","home.html"));
    console.log("Home page");
});

router.get('/survey', function(req,res){
    res.sendFile(path.join(__dirname, "..","public","survey.html"));
    console.log("Survey page");
});

module.exports = (router);