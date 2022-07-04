const express = require('express');
const db = require('./db.js')

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));

app.listen(port, (req, res) => {
  console.log(`Listening on port ${port}`);
});``

app.get('/api/notes', (req, res) => {
  db.queryAsync('Select * from notes')
  .then((val) => {
    res.status(200).send(val)
  })
  .catch((err) => {console.log('err in app.get')})
});