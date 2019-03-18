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

router.get('/:userMovieId', (req, res, next) => {

  UserMovie.findById(req.params.userMovieId)
    .then(userMovie => {
      if (!userMovie) {
        return res.status(404);
      }
      return res.status(200).json(userMovie);
    })
    .catch(err => next(err))
});

router.post('/', (req, res, next) => {
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
    .catch(err => next(err))
})

router.put('/:userMovieId', (req, res, next) => {
  console.log('req.params.userMovieId', req.params.userMovieId);
  console.log('req.body', req.body);
  UserMovie.findByIdAndUpdate(
    req.params.userMovieId,
    req.body,
    { new: true }
  )
    .then((result) => {
      res.json(result)
    })
    .catch(err => next(err))
})

module.exports = router;