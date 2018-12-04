// get route with url /api/friends this will be used to display JSON 
//of all possible friends

//post routes /api/friends. this will handle incoming survey results.
// this route will also be used to handle compatability logic

const express = require('express');
const router = express.Router();

const {add,tableData} = require('../data/tables.js');


router.get("/tables", function(req, res){
    console.log(tableData);
    res.send(tableData);
});

router.get("/waitlist", function(req, res){
    console.log("Waitlist API route called.");
    let waitList = [];
    for (let i = 5; i < tableData.length; i++){
        waitList.push(tableData[i]);
    }
    res.send(waitList);
});
      
router.get("/reserve", function(req, res){
    res.send("Get: API/Reserve");
});

router.post('/clear', function(req, res){
    tableData.length = 0;
    res.send(); 
})

router.post('/reserve', function(req, res){
    add(req.body);
    console.log(tableData);
    res.send("Post: API/Reserve");

});

module.exports = (router);