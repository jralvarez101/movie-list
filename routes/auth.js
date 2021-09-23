const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
// middleware to get the token
const auth = require('../middleware/auth');
const config = require('config');
// Validation
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
//-----------------------Pass auth as a second parameter to get token -----------------------------------

// @route   GET api/auth
// @desc    Get logged in user
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    // we check the database so we await find the user from auth and take password out (- password)
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//----------------------------------------------------------------------------------------------------

// @route   POST api/auth
// @desc    Auth user and get token (Log the user in)
// @access  Public
router.post(
  '/',
  // What to check, the message and the rule -- This only sets the checks will not actually validate
  [
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Please enter valid password').exists(),
  ],
  async (req, res) => {
    // This enforces the validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Take email and password out of the body
    const { email, password } = req.body;

    try {
      // See if user is found in the database
      let user = await User.findOne({ email });
      if (!user) {
        // if not user (user does not exist) send back message
        return res.status(400).json({ msg: 'Invalid credentials' });
      }

      // If there is a user, continue to check the password since we have only checked for an email
      // for this we have to use bcrypt.compare method (takes in plain text password and user password which is hashed)
      // this will return true or false if they match
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid credentials' });
      }
      // If there is a user(with that email) and the passwords match then we send token
      const payload = {
        user: {
          id: user.id,
        },
      };

      // Generate the token (takes in payload, jwtSecret, expiration(optional), callback with token itself)
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 3600000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
