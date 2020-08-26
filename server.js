require("dotenv").config();

const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

const mongoose = require("mongoose");
const passport = require("passport");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./models");

app.use(passport.initialize());
require("./config/passport")(passport);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use("/api", require("./routes/authController"));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Connect to the Mongo DB

// swap database name when deploying to heroku
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://heroku_whpnp6md:chrissipe1@ds047197.mlab.com:47197/heroku_whpnp6md", {
    useNewUrlParser: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
