const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send("Hello World");
});

const api = require('./api.route');

app.use('/api/v1', api);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});