const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { validationResult } = require('express-validator');
const user = require('../models/User');
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
    console.error('an error has ocurred');
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

  const { id, title, vote_average, overview, poster_path, user } = req.body;

  try {
    // see if the movie already exists
    let movie = await Movie.findOne({ title });
    let userId = await Movie.findOne({ user });

    if (movie && userId) {
      return res
        .status(400)
        .json({ msg: 'This movie is already on your list' });
    }

    // If the movie is not already on the list we create a new instance of it
    movie = new Movie({
      id,
      title,
      vote_average,
      overview,
      poster_path,
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
router.delete('/:id', auth, async (req, res) => {
  try {
    let movie = await Movie.findById(req.params.id);

    if (!movie) return res.status(404).json({ msg: 'Movie not found' });

    // Make sure user owns contact
    if (movie.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await Movie.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Movie removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
