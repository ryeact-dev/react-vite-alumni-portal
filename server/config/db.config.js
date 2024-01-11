const Pool = require('pg').Pool;
const path = require('path');
require('dotenv').config({ path: __dirname + '/.env' });
console.log(process.env.USER);

const pool = new Pool({
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.DBPORT,
  database: 'alumni_portal',
});

module.exports = pool;
