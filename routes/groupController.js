const express = require("express");
const router = express.Router();
const passport = require("passport")

// const {Group} = require("../models");
const {Group} = require("../models")

router.post("/newGroup", passport.authenticate('jwt', { session: false }),(req, res) => {

    const newGroup = new Group({
        groupName: req.body.groupName,
        owner: req.user._id,
        users: [req.user._id]
      });

      newGroup.save().then(group => res.json(group))
      .catch(err => console.log(err));
})

module.exports = router;