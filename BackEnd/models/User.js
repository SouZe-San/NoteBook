const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  username: {
    // This is for User name
    type: String,
    required: true,
    unique: true,
  },
  email: {
    // this for Email Id
    type: String,
    required: true,
    unique: true,
  },
  password: {
    // Password For user's Account
    type: String,
    required: true,
  },
  date: {
    // this Will Add By Default
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("user", UserSchema);
// User.createIndexes();
module.exports = User;
