const express = require('express');
const blogRouter = express.Router();
const User = require('../Models/user');
const Blog = require('../Models/blog');
const auth = require('../authenticate')

blogRouter.route("/").post(function(req,res){
    
    const newBlog = new Blog ({
        username :req.body.username,
        exp : req.body.exp
    })

    newBlog.save().then(res.json(
        "blog created"
    )).catch((err)=>{
        console.log(err)
    });
    
}).get(
    function(req,res){

        Blog.find({"username":{$ne:null}},function(err,foundBlogs){
            if(err){
              console.log(err);
            }
            else{
                if(foundBlogs){
                    res.json({"blogs" : foundBlogs});
                }
            }
        })
    }
).delete(
    function(req,res){

        Blog.deleteOne({username: req.body.deletedBlog},function(err){
            if(err){
                console.log(err);
            }
            else{
                console.log("Deleted checked item");
                
            }
        })
    }
)

module.exports = blogRouter;