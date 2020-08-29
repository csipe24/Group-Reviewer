const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/groupreviewer"
);

const postSeed = [
  {
    title: "Mercury Coffee",
    author: "John Doe",
    body: "Should we grab coffee at 5PM?",
    date: new Date(Date.now()),
  },
  {
    title: "Starbucks",
    author: "William Golding",
    body: "Is Starbucks better than Mercury?",
    date: new Date(Date.now()),
  },
];

db.Post.remove({})
  .then(() => db.Post.collection.insertMany(postSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
