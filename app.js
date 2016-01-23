var express = require('express');
var app = express();
var path = __dirname + '/views/';


app.get('/', function (req, res) {
  res.sendFile(path + "index.html");
});

app.use(express.static(__dirname + '/'));


app.listen(process.env.PORT || 7000, function () {
  console.log('dotjamie local on port 7000')
})
