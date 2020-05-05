const Pool = require('pg').Pool

const env = process.env.NODE_ENV || 'development';

let connectionString = {
  user: 'anumm',
  host: 'localhost',
  database: 'skribblist',
  password: 'admin',
  port: 5432,
};


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
  pool.query('SELECT * FROM wordlist ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {
  getLists,
}