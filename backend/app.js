const express = require('express');
const path = require('path');
require('dotenv').config();
const app = express();
const port = 8080;
const { ENVIRONMENT } = process.env;
console.log(process.env);
console.log('test');

app.get('/api', (req, res) => {
  res.send({copy: 'Deployed via CodePipeline via Github!'});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

if (ENVIRONMENT !== 'DEV') {
  //app.use(express.static(path.join(__dirname, './frontend/build')))
  app.use(express.static(path.join('/root/frontend/build')))
  app.get('*', (req, res) => {
    res.sendFile(path.join("/root/frontend/build", "index.html"));
  })
}

// docker build -t fullstack-boilerplate .
// docker run --name dbtest -p 8080 fullstack-boilerplate

// eb init
// eb create
