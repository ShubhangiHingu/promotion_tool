require('dotenv').config();

const express = require('express');
const cors = require('cors');                      //configure the web API's security
const morgan = require('morgan');                 //for log HTTP requests and errors
const userRouter = require('./routes/user.routes');
const app = express();

//database connection
require('../config/db');

// setup morgan
app.use(morgan("dev"));

//middleware
app.use(express.json());                      
app.use(cors());

// Routes which should handle requests

app.use("/api/users", userRouter);

app.get("/home", (req, res) => {
  res.json({ message: "Welcome Promo tool project 🙌" })
});


module.exports = app;