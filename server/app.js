
const express = require('express');
const app = express();
var port = process.env.PORT || 3000;
var morgan = require('morgan');
var fs = require('fs');
var path = require('path');
var omdb = require('omdb');
var proxy = require('express-http-proxy');

// add your routes and middleware below
 app.use(morgan('dev'));
 var axios = require('axios');

 
const url = "http://www.omdbapi.com/";
var config = { proxy: { host: '127.0.0.1', port: 3000 } }

axios.get(url, config)
.then(result => {})
.catch(error => {console.log(error)})

var request = require('request');
app.get('/', function(req,res) {
  //modify the url in any way you want
  var newurl = "http://www.omdbapi.com/?apikey=8730e0e&i=tt3896198";
  request(newurl).pipe(res);
});
app.use('/?i=tt3896198', function (req, res){
     var newurl = 'http://www.omdbapi.com/?apikey=8730e0e&i=tt3896198';
    request(newurl).pipe(res)});




if(!module.parent){ 
    app.listen(port);
}
console.log('server listening',port);

// When making calls to the OMDB API make sure to append the '&apikey=8730e0e' parameter

module.exports = app;









