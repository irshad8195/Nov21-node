const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    // user is present -> {}
    // user not present -> null
    if (user) {
      return res
        .status(400)
        .json({ message: "User already exists/ try Sign in" });
    }
    const newUser = await User.create(req.body);
    res.status(200).json({ message: "User added successfully" });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ error: err, message: "Internal Server Error" });
  }
};

exports.signin = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ message: "Please sign up first" });
    }
    const isPasswordMatching = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!isPasswordMatching) {
      return res.status(400).json({ message: "Incorrect Password" });
    }
    const {_id, email, firstname} = user;

    const token = jwt.sign({_id, email, firstname}, req.app.get("secretKey"), {
      expiresIn:'2h',
    })
    return res.status(200).json({ token: token, message: "Signin Successfull" });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ error: err, message: "Internal Server Error" });
  }
};
