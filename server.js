'use strict'

//PORT
var port = process.env.PORT || 8080;

//REQUIREMENTS
var express = require('express');
var path = require('path');

var app = express();

app.route('/').get(function(req, res) {
     var ip = req.getHeader("HTTP_X_FORWARDED_FOR");
     var info = {
         'ip': ip,
         'lang': req.headers["accept-language"].split(',')[0],
         'os-version': req.headers['user-agent'].split(')')[0]
     };
     res.send(info);
    });


app.listen(port, function(){
    console.log("Listening to " + port + "...")
})