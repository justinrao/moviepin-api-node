const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const config = require('./config');

mongoose.connect(config.dbUrl, {useNewUrlParser: true});
mongoose.set('debug', true);

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors()); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(require('./routes'));

// Handle errors
app.use((err, req, res, next) => {
  if (! err) {
      return next();
  }
  res.status(500);
  res.json(err);
});

app.listen(config.port, () => {
  console.log(`Movie PIN API started running on ${PORT}`)
}); ``