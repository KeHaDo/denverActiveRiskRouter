const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'pizzarouting',
  password: 'stella1',
  port: 5432,
})
/*
const getUsers = (request, response) => {
    pool.query('SELECT * FROM denaddresses_v2 ORDER BY full_addre  ASC', (error, results) => {
    //SELECT full_addre FROM denaddresses_v2 ORDER by full_addre ASC
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  

  module.exports = {
      getUsers
  }
  */