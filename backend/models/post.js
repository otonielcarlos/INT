var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var post = new Schema({
    name: String,
    email: String,
    subject: String,
    comment: [String]

});
