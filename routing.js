const pool = require('./db');

const getAddresses = (request, response) => {
    pool.query('SELECT * FROM denaddresses_v2 ORDER BY full_addre  ASC', (error, results) => {
    //SELECT full_addre FROM denaddresses_v2 ORDER by full_addre ASC
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }  

  module.exports = {
      getAddresses
  }