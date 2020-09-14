const express = require("express");
const router = express.Router();
const passport = require("passport");

// const {Group} = require("../models");
const { Group, Post } = require("../models");
const { Model } = require("mongoose");

router.post(
  "/newGroup",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const newGroup = new Group({
      groupName: req.body.groupName,
      owner: req.user._id,
      users: [req.user._id],
    });

    newGroup
      .save()
      .then((group) => res.json(group))
      .catch((err) => console.log(err));
  }
);

router.get("/getGroups", (req, res) => {
  Group.find(req.query)
    .then((req) => {
      res.json(req);
    })
    .catch((err) => res.status(422).json(err));
});

router.get("/group/:id", (req, res) => {
  Post.find({ groupName: req.params.id })
    .then((groupPosts) => {
      res.json(groupPosts);
    })
    .catch((err) => {
      res.status(422).json(err);
    });
});

router.get("/getGroupsByName", (req, res) => {
  Group.find({groupName: req.query.search})
  .then(req => {res.json(req)})
  .catch(err => res.status(422).json(err));
})

router.delete("/group/:id", (req, res) => {
  Group.findById({ _id: req.params.id })
    .then((groupName) => groupName.remove())
    .then((groupId) => {
      res.json(groupId);
    })
    .catch((err) => res.status(422).json(err));
});

router.put("/addUser/:id", (req, res) => {
  Group.findByIdAndUpdate(
    { _id: req.params.id },

    {$addToSet: {users: req.body.users}},
    {new:true},
    function(err, post){
      if(err){console.log(err)}
      else {console.log(post)}
    }
    )
    .then((group) => {
      res.json(group);
    })
    .catch((err) => res.status(422).json(err));
});


module.exports = router;
