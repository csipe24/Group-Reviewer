const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GroupSchema = new Schema({
  groupName: {
    type: String,
    required: true
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  users: [{
    type: Schema.Types.ObjectId,
    ref: 'users'
  }],
  posts: {
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }
})

const Group = mongoose.model('groups', GroupSchema)
module.exports = Group
