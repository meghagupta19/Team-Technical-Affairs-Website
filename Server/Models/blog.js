const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new mongoose.Schema({
    name: String,
    username: String,
    exp : String,
    title: String
})

module.exports = mongoose.model('Blog',blogSchema);