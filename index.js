const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
//Database modules
const mongoose = require("mongoose");
// bcrypt Authentication modules
const bcrypt = require("bcrypt");
const saltRounds = 10;
//Cookies and Sessions authentication
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

// Setting App
const app = express();

//Connecting session
app.use(session({
    secret: "Techniti is my favourite fest",
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize());
app.use(passport.session());


// Setting ejs and Body-parser
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine",'ejs');
//Connecting Mongoose
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost:27017/tta_userDB', {useNewUrlParser: true, useUnifiedTopology: true});



//////////////////////////////Database///////////////////////////////////////

//Creating Schema
const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    contact : Number,
    roll : Number,
    password : String
})

var blogs = [];
const blogSchema = new mongoose.Schema({
    username: String,
    exp : String
})

//Plugging in passport local mongoose
userSchema.plugin(passportLocalMongoose);

// Creating Model
const User = mongoose.model("User",userSchema);

const Blog = mongoose.model("Blog",blogSchema);



//Cookies and sessions
passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());

passport.deserializeUser(User.deserializeUser());




////////////////////////////Routes/////////////////////////////////////////

//Get Routes

app.get("/",function(req,res){
    res.sendFile(__dirname + "/signup.html");
})

app.get("/home",function(req,res){
    
    if(req.isAuthenticated()){
        res.render("home");
    }
    else{
        res.redirect("/login");
    }
})

app.get("/register",function(req,res){
    res.sendFile(__dirname + "/register.html");
})

app.get("/login",function(req,res){
    res.sendFile(__dirname + "/login.html");
})

app.get("/blog",function(req,res){

    Blog.find({"username":{$ne:null}},function(err,foundBlogs){
        if(err){
          console.log(err);
        }
        else{
            if(foundBlogs){
                res.render("blog",{ blogs : foundBlogs});
            }
        }
    })
})

app.get("/logout",function(req,res){

    req.logout();
    res.redirect("/");
})

//Post Routes

app.post("/register",function(req,res){

    const newUser = new User ({
        name :req.body.name,
        contact : req.body.contact,
        roll : req.body.roll
    })
    
    
    User.register({username:req.body.username},req.body.password , function(err,user){

        if(err){
            console.log(err);
            res.redirect("/register");
        }
        else{
            passport.authenticate("local")(req,res,function(){
                newUser.save();
                res.redirect("/login");
            })
        }
    })

})

app.post("/login",function(req,res){

    const newUser = new User({
        username : req.body.username,
        password : req.body.password
    })
    
    req.login(newUser,function(err){

        if(err){
            console.log(err);
            res.redirect("/register");
        }
        else{
            passport.authenticate("local")(req,res,function(){
                res.redirect("/home");
            })
        }
    })
})

app.post("/blog",function(req,res){
    
    const newBlog = new Blog ({
        username :req.body.username,
        exp : req.body.exp
    })

    newBlog.save();
        
    res.redirect("/blog");
})





// app.post("/register",function(req,res){
//     bcrypt.hash(req.body.password , saltRounds , function(err,resultHash){

//         const newUser = new User({

//             name :req.body.name,
//             email : req.body.email,
//             contact : req.body.contact,
//             roll : req.body.roll,
//             password : req.body.password
//         }) 
//     })
    
//     newUser.save(function(err){

//         if(err){
//             console.log(err);
//         }
//         else{
//             res.redirect("/login");
//         }
//     })
// })

// app.post("/login",function(req,res){

//     const username = req.body.username;
//     const password = req.body.password;

//     User.findOne ({email : username},function(err, foundUser){
        
//         if(err){
//             console.log(err);
//         }
//         else{
//             if(foundUser){
//                 bcrypt.compare(password,foundUser.password,function(err,result){

//                     if(result===true){
//                         res.render("home");
//                     }
//                     else{
//                         res.render("Password is incorrect");
//                     }
//                 })         
//             }
//             else{
//                 res.redirect("/register");
//             }
//         }
//     })
// })

// Server Listening
var port = process.env.PORT || 3000;

app.listen(port,function(){
    console.log("Server is running on port "+ port);
})