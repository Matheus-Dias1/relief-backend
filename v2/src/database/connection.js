const knex = require('knex');
const configuration = {
  client: 'sqlite3',
  connection: {
    filename: './src/database/db.sqlite3' 
  },
    pool: {
  afterCreate: (conn, cb) =>
     conn.run('PRAGMA foreign_keys = ON', cb)
  },
  useNullAsDefault: true,
}

const connection = knex(configuration);

module.exports = connection;