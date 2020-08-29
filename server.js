require("dotenv").config();

const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

const mongoose = require("mongoose");
const passport = require("passport");

require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.use(passport.initialize());
require("./config/passport")(passport);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use("/authapi", require("./routes/authController"));
app.use("/postapi", require("./routes/postController"));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Connect to the Mongo DB

// swap database name when deploying to heroku
mongoose
  .connect(
    process.env.MONGODB_URI || "mongodb://localhost/groupreviewer",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

// 'mongodb+srv://csipe24:chrissipe1@uwcodingbc.d3yqy.mongodb.net/UWCODINGBC?retryWrites=true&w=majority',
    