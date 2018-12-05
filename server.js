const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8080;


const apiRoutes = require("./app/routing/apiRoutes");
const htmlRoutes = require("./app/routing/htmlRoutes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use("/api", apiRoutes);
app.use(htmlRoutes);

app.listen(PORT, function(req,res){
    console.log("Server Started");
    console.log("Listening on Port: ", PORT);
});
