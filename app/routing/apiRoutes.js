// get route with url /api/friends this will be used to display JSON 
//of all possible friends

//post routes /api/friends. this will handle incoming survey results.
// this route will also be used to handle compatability logic

const express = require('express');
const router = express.Router();

const {tableData,add} = require('../data/friends.js');
var userData = [];



router.get("/reserve", function(req, res){
    console.log("sending the server data somewhere")
    res.send(tableData);
});


router.post('/reserve', function(req, res){
    userData = req
    console.log("user's data is stored on the server")
    // console.log(userData);
    console.log(userData)
    console.log(tableData)
    res.send("Post: API/Reserve");
    
});

// router.post('/clear', function(req, res){
    //     tableData.length = 0;
    //     res.send(); 
    // })

// router.get("/tables", function(req, res){
//     console.log(tableData);
//     res.send(tableData);
// });

// router.get("/waitlist", function(req, res){
//     console.log("Waitlist API route called.");
//     let waitList = [];
//     for (let i = 5; i < tableData.length; i++){
//         waitList.push(tableData[i]);
//     }
//     res.send(waitList);
// });
    module.exports = (router);