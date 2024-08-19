const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  plan: {
    type: String,
    default: "free",
  },
  price:{
    type: String,
    default: "0",
  },
  startdate:{
    type: Date,
    default: Date.now,

  },
  enddate:{
    type: Date,
    default: Date.now,

  },
  transactionStatus: {
    type: String,
    default: "pending",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
