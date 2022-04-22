const { config_pg } = require('./config');

function getUsers (request, response) {
    const query = 'SELECT * FROM denaddresses_v2 ORDER BY full_addre  ASC',
    return query(query)
  }

  

  module.exports = {
      getUsers
  }