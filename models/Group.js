const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
name: {
    type:String, 
    required: true
},
owner: { 
    type: Schema.Types.ObjectId,
    ref: "users"
},
users: [{
    type: Schema.Types.ObjectId,
    ref: "users"
}],
});

module.exports = Group = mongoose.model("groups", GroupSchema);

// Groups ID gets added to user
// User ID gets added to Group

// Add user to both owner and users

// groups/groupid/users post route to add users

// 1.Create Group
// 2. Put Group id in user array
