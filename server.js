'use strict'

//PORT
var port = process.env.PORT || 8080;

//REQUIREMENTS
var express = require('express');
var path = require('path');

var app = express();
app.use(express.static(path.resolve(__dirname, 'client')));

app.get('')


app.listen(port, function(){
    console.log("Listening to " + port + "...")
})