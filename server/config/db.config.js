// const Pool = require('pg').Pool;
// const path = require('path');
// require('dotenv').config({ path: __dirname + '/.env' });
// console.log(process.env.USER);

// const pool = new Pool({
//   user: process.env.USER,
//   password: process.env.PASSWORD,
//   host: process.env.HOST,
//   port: process.env.DBPORT,
//   database: 'postgres',
// });

// module.exports = pool;

const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    require: true,
  },
});

module.exports = pool;
