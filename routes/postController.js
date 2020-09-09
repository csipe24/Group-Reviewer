const express = require("express");
const router = express.Router();

// Load User model
const {Post} = require("../models");

router.post("/newPost", (req, res) => {
    const newPost = new Post({
        title: req.body.title,
        author: req.body.author,
        body: req.body.body
      });

      newPost.save().then(user => res.json(user))
      .catch(err => console.log(err));
})


router.get("/getPosts", (req, res) => {
        Post.find(req.query)
        .then(req => {res.json(req)})
        .catch(err => res.status(422).json(err));
})

router.get("/posts/:id", (req, res) => {
  Post.findById(req.params.id)
  .then(req => {res.json(req)})
  .catch(err => res.status(422).json(err));
})

router.delete("/getPosts/:id", (req, res) => {
  Post.findById({_id: req.params.id})
    .then(postModel => postModel.remove())
    .then(req => {res.json(req)})
    .catch(err => res.status(422).json(err))
})

router.put("/getPosts/:id", (req,res) =>{
  console.log(req.body);
  console.log("testing");
  Post.findByIdAndUpdate( {_id : req.params.id}, req.body )
  .then( postModel => {res.json(postModel)})
  .catch(err => res.status(422).json(err))
})


module.exports = router;


