const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const requiredMsg = "{PATH} is required.";

const UserSchema = new mongoose.Schema(
  {
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
  },
  { timestamps: true }
);

UserSchema.virtual("confirmPassword")
  .get(() => this._confirmPassword)
  .set((value) => (this._confirmPassword = value));

UserSchema.pre("validate", function (next) {
  if (this.password !== this._confirmPassword) {
    this.invalidate("confirmPassword", "Password must match confirm password.");
  }
  next();
});

UserSchema.pre("save", function (next) {
  bcrypt.hash(this.password, 10).then((hash) => {
    this.password = hash;
    next();
  });
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
