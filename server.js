var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('public'));

//this one is a subset of the '/*'
// app.get('/', function(req, res) {
// res.sendFile(path.join(__dirname, 'public/views/index.html'));
//
//
// });


//at the very bottom of the server because this is going to be a route that looks like /*
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

app.listen(3000);
