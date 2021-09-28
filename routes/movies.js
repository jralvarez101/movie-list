const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const Movies = require('../models/Movies');

// @route   GET api/movies
// @desc    Get all users movies
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const movies = await Movies.find({ user: req.user.id }).sort({ date: -1 });
    res.json(movies);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/movies
// @desc    Add new movie to list
// @access  Private
router.post('/', (req, res) => {
  res.send('Add new movie to list');
});

// @route   PUT api/movies/:id
// @desc    Update movie
// @access  Private
router.put('/:id', (req, res) => {
  res.send('Update Movie');
});

// @route   DELETE api/movies/:id
// @desc    Delete Movie
// @access  Private
router.delete('/:id', (req, res) => {
  res.send('Delete Movie');
});

module.exports = router;
