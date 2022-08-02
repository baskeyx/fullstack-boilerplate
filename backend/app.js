const express = require('express');
const path = require('path');
require('dotenv').config();
const app = express();
const port = 8000;
const { ENVIRONMENT } = process.env;

app.get('/api', (req, res) => {
  res.send({copy: 'Hello World!'});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

if (ENVIRONMENT !== 'DEV') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "/frontend/build", "index.html"));
  })
}
