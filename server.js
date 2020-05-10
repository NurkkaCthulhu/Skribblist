const express = require('express');
const bodyParser = require('body-parser')
var cors = require('cors');
const app = express();
const db = require('./queries')
const path = require('path');

app.use(express.static('./dist/Skribblist'));

app.use(bodyParser.json())
app.use(cors())

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.listen(process.env.PORT || 8080, () => {
  console.log('App running');
});


app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/Skribblist/'}),
);
/*
app.get('/', (req, res) => {
    res.json({ info: 'Node.js, Express, and Postgres API' })
});

app.get('/lists', db.getLists);
*/

