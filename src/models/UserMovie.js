const uuid = require('uuid');

const USER_MOVIES = [
  {
    userId: '1',
    movieId: '1',
    rating: 5
  },

  {
    userId: '2',
    movieId: '3',
    rating: 0
  }
]

const getUserMovies = () => USER_MOVIES;

const createUserMovie = (userMovie) => {
  return {...userMovie, id: uuid()}
}

module.exports = {
  getUserMovies,
  createUserMovie
}