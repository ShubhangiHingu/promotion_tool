const express = require("express");
const router = express.Router();

// Handle incoming POST requests to /users

const {
  createUser,

} = require('../controllers/user.controller');


router.get('/', createUser);

module.exports = router;