const mongoose = require('mongoose');

const userMovieSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  movieId: String,
  userId: String,
  rating: Number
})

module.exports = mongoose.model('UserMovie', userMovieSchema); 