const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
// Validation
const { check, validationResult } = require('express-validator');

const User = require('../models/User');

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post(
  '/',
  [
    // What to check, the message and the rule -- This only sets the checks will not actually validate
    check('name', 'please add name').not().isEmpty(),
    check('email', 'please include a valid email').isEmail(),
    check(
      'password',
      'please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    // This enforces the validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // res.send(req.body) has name, email and password in it so you can destructure it.
    const { name, email, password } = req.body;
    try {
      // see if a user with that email already exists
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: 'user already exists' });
      }

      // If the user entered does not already exists we create an instance of a new user
      user = new User({
        name,
        email,
        password,
      });

      // salt and hash password
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      // New user is created in the collection
      await user.save();

      res.send('User saved');
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
