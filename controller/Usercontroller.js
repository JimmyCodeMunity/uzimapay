const mongoose = require("mongoose");
const express = require("express");
const User = require("../model/UserModel");
//create new user


//payment crredentials

// const createUser = async (req, res) => {
//   try {
//     const { username, email } = req.body;
//     const user = await User.create({
//       username,
//       email,
//     });
//     if (user) {
//       res.status(201).json(user);
//       console.log("user created successfully", user);
//     } else {
//       res.status(400).json({ message: "Invalid user data" });
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: error.message });
//   }
// };
const createUser = async (req, res) => {
  try {
    const { username, email } = req.body;

    // Calculate the end date for the 7-day trial
    const currentDate = new Date();
    const endDate = new Date(currentDate);
    endDate.setDate(endDate.getDate() + 7);

    // Create the user with the calculated end date
    const user = await User.create({
      username,
      email,
      enddate: endDate,  // Set the enddate for 7-day trial
    });

    if (user) {
      res.status(201).json(user);
      console.log("User created successfully", user);
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    console.log("Error creating user:", error);
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  createUser,
};
