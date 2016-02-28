var express = require('express');
var app = express();
var path = __dirname + '/views/';


app.get('/', function (req, res) {
  res.sendFile(path + "index.html");
});

app.get('/experiments', function (req, res) {
  res.sendFile(path + "/experiments/index.html");
});

app.get('/experiments/click-c', function (req, res) {
  res.sendFile(path + "/experiments/click-c.html");
});

app.get('/experiments/image-search', function (req, res) {
  res.sendFile(path + "/experiments/image-search.html");
});

app.use(express.static(__dirname + '/'));


app.listen(process.env.PORT || 7000, function () {
  console.log('dotjamie local on port 7000')
})
