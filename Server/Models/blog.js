const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new mongoose.Schema({
    username: String,
    exp : String
})

module.exports = mongoose.model('Blog',blogSchema);