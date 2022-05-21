"use strict";

var express = require("express");

var app = express();
var port = process.env.PORT || 4000;
app.use(express["static"]('public'));
app.get("/", function (req, res) {
  res.send('Hello World!456456456');
});
app.get("/bla", function (req, res) {
  res.send('blablabla 6');
});

function multi(a, b) {
  return a * b;
}

app.get('/multi', function (req, res) {
  res.send("<h1>".concat(multi(8, 6), " </h1>"));
});
app.listen(port, function () {
  console.log("Server listening on port ".concat(port));
});