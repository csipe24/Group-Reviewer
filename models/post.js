const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  body: { type: String, required: true },
  date: { type: Date, default: Date.now },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0  },
  groupName: {
    type: Schema.Types.ObjectId,
    ref: 'groups'
  }
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post
