const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  register: (req, res) => {
    User.create(req.body)
      .then((user) => {
        //log user in after successful registration:
        const userToken = jwt.sign(
          {
            id: user._id,
          },
          process.env.JWT_SECRET
        );

        res
          .cookie("usertoken", userToken, secret, {
            httpOnly: true,
          })
          .json({ msg: "success!", user: user });
      })
      .catch((err) => res.json(err));
  },

  login(req, res) {
    //check to see if user's email exists in db
    User.findOne({ email: req.body.email })
      .then((user) => {
        if (user === null) {
          //if no email match in db:
          res.status(400).json({ msg: "invalid login attempt" });
        } else {
          //if the user exists, check password:
          bcrypt
            .compare(req.body.password, user.password)
            .then((passwordIsValid) => {
              if (passwordIsValid) {
                //sign in user with jwt.sign()
                res
                  .cookie(
                    "usertoken",
                    jwt.sign({ _id: user._id }, process.env.JWT_SECRET),
                    {
                      //to avoid additional configurations
                      //okay in dev mode, but **not safe** for production
                      httpOnly: true,
                    }
                  )
                  .json({ msg: "success!" });
              } else {
                res.status(400).json({ msg: "invalid login attempt" });
              }
            });
        }
      })
      .catch((err) => res.json(err));
  },

  logout(req, res) {
    res.clearCookie("usertoken");
    res.json({ msg: "usertoken cookie cleared" });
  },

  getLoggedInUser(req, res) {
    const decodedJWT = jwt.decode(req.cookies.usertoken, { complete: true });

    User.findById(decodedJWT.payload._id)
      .then((user) => res.json(user))
      .catch((err) => res.json(err));
  },

  getAll(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.json(err));
  },

  getOne(req, res) {
    User.findOne({ _id: req.params.id })
      .then((user) => res.json(user))
      .catch((err) => res.json(err));
  },
};
