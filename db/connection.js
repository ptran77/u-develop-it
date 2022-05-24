const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'Baselaird8381',
    database: 'election'
  },
  console.log('Connected to the election database.')
)

module.exports = db;