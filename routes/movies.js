const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const Movie = require('../models/Movie');

// @route   GET api/movies
// @desc    Get all users movies
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const movies = await Movie.find({ user: req.user.id }).sort({ date: -1 });
    res.json(movies);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/movies
// @desc    Add new movie to list
// @access  Private
router.post('/', auth, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, rating, overview, releaseDate } = req.body;

  try {
    // see if the movie already exists
    let movie = await Movie.findOne({ name });
    if (movie) {
      return res
        .status(400)
        .json({ msg: 'This movie is already on your list' });
    }

    // If the movie is not already on the list we create a new instance of it
    movie = new Movie({
      name,
      rating,
      overview,
      releaseDate,
      user: req.user.id,
    });

    // new movie is created in the collection
    await movie.save();

    // return movie to the client
    res.json(movie);
  } catch (err) {
    console.error(err.message);
    res.status(500).send;
    ('Server Error');
  }
});

// @route   DELETE api/movies/:id
// @desc    Delete Movie
// @access  Private
router.delete('/:id', (req, res) => {
  res.send('Delete Movie');
});

module.exports = router;
