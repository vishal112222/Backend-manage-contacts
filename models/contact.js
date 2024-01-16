const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add the contact name"],
    },

    email: {
      type: String,
      required: [true, "Please add the contact email"],
    },

    phone: {
      type: String,
      required: [true, "Please add the contact Phone No"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("my_contact", contactSchema);
