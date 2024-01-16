const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
    },

    email: {
      type: String,
      required: [true, "please enter email"],
      unique: [true, "email address is already taken"],
    },

    password: {
      type: String,
      required: [true, "Please add the User password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
