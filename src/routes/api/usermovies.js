const router = require('express').Router();
const UserMovies = require('../../models/UserMovie')

router.get('/', (req, res, next) => {
  res.json(UserMovies.getUserMovies());  
  next();
})

router.post('/', (req, res, next) => {
  const userMovie = req.body;
  console.log(userMovie);
  const result = UserMovies.createUserMovie(userMovie);
  res.json(result);
})

module.exports = router;