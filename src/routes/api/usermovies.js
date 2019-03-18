const router = require('express').Router();
const UserMovie = require('../../models/UserMovie')
const mongoose = require('mongoose');

router.get('/', (req, res, next) => {

  const query = !req.query.userId ? {} : { userId: req.query.userId };
  console.log('query', query);
  UserMovie.find(query)
    .then(userMovies => {
      return res.status(200).json(userMovies);
    })
});

router.post('/', (req, res, next) => {
  console.log(req.body);
  const userMovie = new UserMovie({
    _id: new mongoose.Types.ObjectId(),
    ...req.body
  });
  userMovie.save()
    .then((result) => {
      res
        .status(201)
        .json(result);
    })
})

module.exports = router;