var express = require('express');
var morgan = require('morgan')
var bodyParser = require('body-parser')
var app = express();
var path = __dirname + '/views/';

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))

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

app.get('/experiments/fabricjs', function (req, res) {
  res.sendFile(path + "/experiments/fabricjs.html");
});

app.get('/experiments/crud', function (req, res) {
  res.sendFile(path + "/experiments/crud.html");
});

app.get('/experiments/dom-events', function (req, res) {
  res.sendFile(path + "/experiments/dom-events.html");
});

app.get('/experiments/dom-core-interfaces', function (req, res) {
  res.sendFile(path + "/experiments/dom-core-interfaces.html");
});

app.get('/experiments/array-display', function (req, res) {
  res.sendFile(path + "/experiments/array-display.html");
});

app.get('/experiments/update-clock', function (req, res) {
  res.sendFile(path + "/experiments/update-clock.html");
});

app.get('/experiments/cow-clicker', function (req, res) {
  res.sendFile(path + "/experiments/cow-clicker.html");
});

app.get('/experiments/iam-foo', function (req, res) {
  res.sendFile(path + "/experiments/iam-foo.html");
});

app.get('/experiments/move-on-click', function (req, res) {
  res.sendFile(path + "/experiments/move-on-click.html");
});

app.get('/experiments/memory', function (req, res) {
  res.sendFile(path + "/experiments/memory.html");
});

app.post('/users', function (req, res) {
  console.log(req.body)
  // create in the database
  res.statusCode = 401
  res.send({
    id: 1,
    name: req.body.name,
    age: req.body.age
  })
})

app.use(express.static(__dirname + '/'));

app.listen(process.env.PORT || 7000, function () {
  console.log('dotjamie local on port 7000')
})
