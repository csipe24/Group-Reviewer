require('dotenv').config()

const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3001
const app = express()

const mongoose = require('mongoose')
const passport = require('passport')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require('./models')

app.use(passport.initialize())
require('./config/passport')(passport)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

app.use('/authapi', require('./routes/authController'))
app.use('/postapi', require('./routes/postController'))
app.use('/groupapi', require('./routes/groupController'))

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'))
})

const MONGODB_URI = 'mongodb+srv://dbProject3User1:nvw6dPTlHVqKkCiy@cluster0.obrsd.mongodb.net/groupreviewer?retryWrites=true&w=majority'

mongoose
  .connect(
    MONGODB_URI || 'mongodb://localhost/groupreviewer',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err))

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
})
