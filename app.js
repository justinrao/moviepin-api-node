const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.write('Movie PIN API');
  res.end();
})

app.listen(PORT, () => console.log(`Movie PIN API started listening on ${PORT}`));