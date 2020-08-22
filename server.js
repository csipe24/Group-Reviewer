const app = express();
const passport = require("dotenv").config()
require("./models");
app.use(passport.initialize());
require("./passport")(passport);
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3002;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use("/api", require("./routes/authController") );


app.get("*", (res, res) => {
  res.sendFile(path.join(__dirname,"./clientbuild/index.html"))
})

// Connect to the Mongo DB
// swap database name
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/GroupReviwerDB",
{ useNewUrlParser: true})
.then(() => console.log("MongoDB connected"))
.catch(err => (console.log(err)));


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
