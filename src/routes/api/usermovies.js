const router = require('express').Router();
const UserMovies = require('../../models/UserMovie')

router.get('/', (req, res, next) => {
  res.json(UserMovies.getUserMovies());  
})

module.exports = router;