const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const config = require('./config');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/swagger.json');
const router = require('./routes')

// connect to Mongo
mongoose.connect(config.dbUrl, {useNewUrlParser: true});
mongoose.set('debug', true);

const app = express();

// Setup Middle-wares
app.use(cors()); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Add Swagger & API routes
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api', router);

// Handle errors
app.use((err, req, res, next) => {
  if (! err) {
      return next();
  }
  res.status(500);
  res.json(err);
});

app.listen(config.port, () => {
  console.log(`Movie PIN API started running on ${config.port}`)
});