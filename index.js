const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path')

const userRoute = require('./routes/UserRoute');
const paymentRoute = require('./routes/paymentRoute');

const app = express();
// app.use(express.static('public'))
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//get env variables
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "./.env",
  });
}

// const port = process.env.PORT;
// const dburl = process.env.DB_CONNECTION
const port = 5000;
const dburl =
  "mongodb+srv://devjimin02:ghost02@uzimapayment.0lvmvx4.mongodb.net/?retryWrites=true&w=majority&appName=uzimapayment";

//test app
app.listen(port, (req, res) => {
  console.log(`Server running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Server up and running");
});
//db connection
mongoose
  .connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB Connected...");
  })
  .catch((error) => {
    console.log(error);
  });


  //prepare routes
  app.use('/api/v1/user',userRoute);
  app.use('/api/v1/payment',paymentRoute);
