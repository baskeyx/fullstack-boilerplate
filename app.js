const express = require('express');
const app = express();
const port = 8000;

app.get('/api', (req, res) => {
  res.send({copy: 'Hello World!'});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});