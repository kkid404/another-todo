const pg = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const { Pool } = pg

const config = {
  user: process.env.DATA_LOGIN,
  password: process.env.DATA_PASSOWRD,
  host: process.env.DATA_HOST,
  port: process.env.DATA_PORT,
  database: process.env.DATA_DB
}

const pool = new Pool(config)
 
const query = (text, params) => {
  return pool.query(text, params)
}

module.exports = {query}