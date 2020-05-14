const mongoose = require("mongoose");
const requiredMsg = "{PATH} is required.";

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, requiredMsg],
    minlength: [2, "{PATH} must be at least {MINLENGTH} characters."],
  },
  lastName: {
    type: String,
    required: [true, requiredMsg],
    minlength: [2, "{PATH} must be at least {MINLENGTH} characters."],
  },
  email: {
    type: String,
    required: [true, requiredMsg],
    minlength: [8, "{PATH} must be at least {MINLENGTH} characters."],
  },
  password: {
    type: String,
    required: [true, requiredMsg],
    minlength: [8, "{PATH} must be at least {MINLENGTH} characters."],
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
