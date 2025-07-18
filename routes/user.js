const express = require('express');
const { handleUserSignup, handleUserLogin } = require("../controllers/user.js");
const router = express.Router();

// Signup
router.post('/', handleUserSignup);

// Login
router.post('/login', handleUserLogin);

// Logout 
router.get('/logout', (req, res) => {
  res.clearCookie('uid');
  res.redirect('/login');
});

module.exports = router;
