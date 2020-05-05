const Pool = require('pg').Pool

const env = process.env.NODE_ENV || 'development';

let connectionString = {
  user: 'anumm',
  host: 'localhost',
  database: 'skribblist',
  password: 'admin',
  port: 5432,
};

console.log(env);
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
    response.status(200).json({name: 'moi, id: 1'})
  })
}

module.exports = {
  getLists,
}