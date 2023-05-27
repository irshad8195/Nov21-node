const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      //required: true
    },
    lastname: {
      type: String,
      //required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    isActive: {
      type: Boolean,
      default: true
    }
  },
  { timestamp: true }
);

userSchema.pre('save', function(next) {
  this.password = bcrypt.hashSync(this.password, saltRounds)
  next();
})

const User = mongoose.model("User", userSchema)
module.exports = User
