require("dotenv").config();

const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose")
const passport = require("passport");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./models");

app.use(passport.initialize());
require("./config/passport")(passport);


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use("/api", require("./routes/authController") );


app.get("*", (req, res) => {
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
