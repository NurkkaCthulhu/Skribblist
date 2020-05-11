const express = require('express');
const bodyParser = require('body-parser')
var cors = require('cors');
const app = express();
const db = require('./queries')
const path = require('path');

const Pool = require('pg').Pool

app.use(express.static(__dirname + '/dist/Skribblist'));

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

/*
app.get('/*', (req, res) =>
    res.sendFile(path.join(__dirname + '/dist/Skribblist/index.html')),
);*/
/*
app.get('/', (req, res) => {
    res.json({ info: 'Node.js, Express, and Postgres API' })
});
*/
app.get('/lists', function (req, res) {
  console.log('getting list')
  pool.query('SELECT * FROM wordlist ORDER BY id ASC', (error, results) => {
    console.log(results.rows);
    if (error) {
      throw error
    }
    res.send(results.rows)
  })
});

let connectionString = {
  user: 'anumm',
  host: 'localhost',
  password: 'admin',
  port: 5432,
};
const env = process.env.NODE_ENV || 'development';
if (env === 'development') {
  connectionString.database = 'skribblist';
} else {
  connectionString = {
  connectionString: process.env.HEROKU_POSTGRESQL_GREEN_URL,
  ssl: true
  };
};
const pool = new Pool(connectionString);
pool.on('connect', () => console.log('connected to db'));

const getLists = (request, response) => {
  console.log('getting list')
  pool.query('SELECT * FROM wordlist ORDER BY id ASC', (error, results) => {
    console.log(results.rows);
    if (error) {
      throw error
    }
    response.status(200).json(response.rows)
  })
}
