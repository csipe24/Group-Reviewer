const express = require("express");
const router = express.Router();

// const {Group} = require("../models");
const {Group} = require("../models")

router.post("/newGroup", (req, res) => {

    const newGroup = new Group({
        groupName: req.body.groupName,
        owner: req.body.owner,
        users: req.body.users
      });

      newGroup.save().then(group => res.json(group))
      .catch(err => console.log(err));
})

module.exports = router;