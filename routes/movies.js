const express = require('express');
const router = express.Router();

// @route   GET api/movies
// @desc    Get all users movies
// @access  Private
router.get('/', (req, res) => {
  res.send('display your movie list');
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
