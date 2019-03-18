const router = require('express').Router();

router.use('/usermovies', require('./usermovies'));

module.exports = router;