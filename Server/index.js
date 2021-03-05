const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var passport = require('passport');
const userRouter = require("./Routes/user")
const blogRouter = require("./Routes/blog")
const app = express();
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost:27017/tta_userDB', {useNewUrlParser: true, useUnifiedTopology: true});

var auth = require('./authenticate');
const cors= require('cors');
app.use(cors());
app.use(passport.initialize());

app.use("/api/user", userRouter)
app.use("/api/blog",auth.verifyUser, blogRouter);

app.listen(5000, () => console.log("server running "));

module.exports = app;