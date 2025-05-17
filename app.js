// load express package and assign it to variable express
const express = require('express');
// creating an instance of Express, and storing it in a variable app.
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Kubernetes!');
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});