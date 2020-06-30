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
      validate: {
        validator: (val) => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
        message: "Please enter a valid email",
      },
    },
    password: {
      type: String,
      required: [true, requiredMsg],
      minlength: [8, "{PATH} must be at least {MINLENGTH} characters."],
    },
  },
  { timestamps: true }
);

//used to confirm password so we don't have to store pwConfirm in the db
UserSchema.virtual("confirmPassword")
  .get(() => this._confirmPassword)
  .set((value) => (this._confirmPassword = value));

//this will run first. if pw's match, then continue to check the rest of the validations
//cannot use arrow fxn here or with 'save' below because it will not have the proper scope
UserSchema.pre("validate", function (next) {
  if (this.password !== this._confirmPassword) {
    this.invalidate("confirmPassword", "Password must match confirm password.");
  }
  next();
});

//again, the 'pre' hook means this{pw hashing} will run before the 'save' method runs
UserSchema.pre("save", function (next) {
  // the 10 here refers to the number of salt rounds we want bcrypt to use
  bcrypt.hash(this.password, 10).then((hash) => {
    this.password = hash;
    next();
  });
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
