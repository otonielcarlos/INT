var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

var port = process.env.PORT || 5000;

app.use(bodyParser.json());

//var comment = [];

app.get("/", function (req, res) {
    res.send(req.body);
});

app.post("/", function (req, res) {
    res.send(req.body);
    console.log("Seems to be working");
});

app.listen(port, function () {
    console.log("App listening on port " + port);

});