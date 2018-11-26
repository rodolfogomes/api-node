
const { Pool } = require('pg')
function connection() {
  var pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'apinode'
  })
  return pool
}
module.exports = () => {
    query: (text, params, callback) => {
        return pool.query(text, params, callback)
     }
  return connection;
}