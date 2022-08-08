const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true,
    index: true,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  mobile: {
    type: String,
  },
  password: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("User", UserSchema);
