import knex from 'knex';
import path from 'path';

const db = knex({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'postgres',
    password: 'docker',
    database: 'proffy',
  },
  useNullAsDefault: true,
});

export default db;
