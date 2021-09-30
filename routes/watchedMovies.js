const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const WatchedMovie = require('../models/WatchedMovie');

// @route   GET api/watched
// @desc    Get all user watched movies
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const watchedMovies = await WatchedMovie.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(watchedMovies);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/watched
// @desc    Add new watched movie to list
// @access  Private
router.post('/', auth, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, rating, overview, releaseDate, myRating } = req.body;

  try {
    // see if the movie already exists
    let watchedMovie = await WatchedMovie.findOne({ name });
    if (watchedMovie) {
      return res
        .status(400)
        .json({ msg: 'This movie is already on your list' });
    }

    // If the movie is not already on the list we create a new instance of it
    watchedMovie = new WatchedMovie({
      name,
      rating,
      overview,
      releaseDate,
      myRating,
      user: req.user.id,
    });

    // new movie is created in the collection
    await watchedMovie.save();

    // return movie to the client
    res.json(watchedMovie);
  } catch (err) {
    console.error(err.message);
    res.status(500).send;
    ('Server Error');
  }
});

// @route   PUT api/watched/:id
// @desc    edit watched Movie
// @access  Private
router.put('/:id', auth, async (req, res) => {
  const updates = req.body;

  try {
    // we are searching the database for a movie with matching id (req.params.id)
    let watchedMovie = await WatchedMovie.findById(req.params.id);
    if (!watchedMovie) {
      res.status(404).json({ msg: 'Movie not found' });
    }
    // we want to make sure user owns the movie
    if (watchedMovie.user.toString() !== req.user.id)
      return res.status(401).json({ msg: 'Not authorized' });

    // after verifying this movie belongs to user we do the actual update
    watchedMovie = await WatchedMovie.findByIdAndUpdate(req.params.id, updates);

    res.json({ msg: 'Movie rating has been updated' });
  } catch (error) {
    console.error(err.message);
    res.status(500).send;
    ('Server Error');
  }
});

// @route   DELETE api/watched/:id
// @desc    Delete watched Movie
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    // we are searching the database for a movie with matching id (req.params.id)
    let watchedMovie = await WatchedMovie.findById(req.params.id);
    if (!watchedMovie) {
      res.status(404).json({ msg: 'Movie not found' });
    }
    // we want to make sure user owns the movie
    if (watchedMovie.user.toString() !== req.user.id)
      return res.status(401).json({ msg: 'Not authorized' });

    // after verifying this movie belongs to user we can delete it
    await WatchedMovie.findByIdAndRemove(req.params.id);

    res.json({ msg: 'movie has been removed from watched list' });
  } catch (error) {
    console.error(err.message);
    res.status(500).send;
    ('Server Error');
  }
});

module.exports = router;
