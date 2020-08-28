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

router.get("/api/transaction", (req, res) => {
    Transaction.find({}).sort({date: -1})
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(404).json(err);
      });
  });
  
  module.exports = router;

module.exports = router;



  router.get("/api/transaction", (req, res) => {
    Transaction.find({})
      .sort({ date: -1 })
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  