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
  //testing
  // Post.findAll().then(post => {
  //   res.json(post)
  // })
    
})

module.exports = router;