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


app.get('/*', (req, res) =>
    res.sendFile(path.join(__dirname + '/dist/Skribblist/index.html')),
);

let connectionString = {
  user: 'anumm',
  host: 'localhost',
  password: 'admin',
  //port: 5432,
};

const env = process.env.NODE_ENV || 'development';
if (env === 'development') {
  connectionString.database = 'skribblist';
} else {
  connectionString = {
  connectionString: process.env.HEROKU_POSTGRESQL_GREEN_URL
  };
};
const pool = new Pool(connectionString);
pool.on('connect', () => console.log('connected to db'));

/*
app.get('/', (req, res) => {
    res.json({ info: 'Node.js, Express, and Postgres API' })
});
*/
app.get('/lists', function (req, res) {
  console.log('getting list')
  pool.query('SELECT * FROM wordlist ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    if (results) {
      res.send(results.rows)
    } else {
      res.send({error: ' unknowns'})
    }
  })
});

// get list for modifying
app.get('/lists/:listId&:listCode', function (req, res) {
  console.log('getting list with code and name')
  const userId = req.params.listId;
  const userCode = req.params.listCode;
  console.log('name: ' + userId + ' code: ' + userCode)
  pool.query('SELECT * FROM wordlist WHERE (id = $1 AND code = $2)', [userId, userCode], (error, results) => {
    console.log(results.rows);
    if (error) {
      throw error 
    }
    if (results.rows.length > 0) {
      res.send(results.rows[0])
    } else {
      let response = { error: 'Password and ID do not match.' };
      res.status(404);
      res.send(response);
    }
  })
});

app.post('/lists', function (req, res) {
  const { words, code, info, list_name, public } = req.body

  pool.query('INSERT INTO wordlist (words, code, info, list_name, public) VALUES ($1, $2, $3, $4, $5)', [words, code, info, list_name, public], (error, results) => {
    if (error) {
      throw error
    }
    res.status(201);
    res.send({name: list_name})
  })
});

app.delete("/lists/:id([0-9]+)", function(req, res) {
  let removeID = req.params.id;
  pool.query('DELETE FROM wordlist WHERE id = $1', [removeID], (error, results) => {
    if (error) {
      throw error
    }
    let response = { id: removeID };
    res.status(200);
    res.send(response);
  })
});



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
