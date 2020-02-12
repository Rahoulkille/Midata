// users-model.js - A KnexJS
// 
// See http://knexjs.org/
// for more of what you can do here.
import { Application } from '../declarations';
import Knex from 'knex';

export default function (app: Application) {
  const db: Knex = app.get('knexClient');
  const tableName = 'users';
  
  db.schema.hasTable(tableName).then(exists => {
    console.log('exists', JSON.stringify(exists, null, 4));
    if(!exists) {
      db.schema.createTable(tableName, table => {
        table
          .integer('id');
        table
          .string('email')
          .unique();
        table
          .uuid('user_id')
          .unique()
          .primary();
        table
          .string('password');
      })
        .then(() => console.log(`Created ${tableName} table`))
        .catch(e => console.error(`Error creating ${tableName} table`, e));
    }
  });

  return db;
}

export interface DbUser {
  email: string;
  password: string;
  user_id: string;
}
