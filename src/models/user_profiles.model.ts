// user_profiles-model.js - A KnexJS
// 
// See http://knexjs.org/
// for more of what you can do here.
import Knex from 'knex';
import { Application } from '../declarations';

export default function (app: Application) {
  const db: Knex = app.get('knexClient');
  const tableName = 'user_profiles';

  db.schema.hasTable(tableName).then(exists => {
    console.log('exists', JSON.stringify(exists, null, 4));
    if (!exists) {
      db.schema.createTable(tableName, table => {
        table
          .increments('id');
        table
          .string('text');
        table
          .uuid('user_id')
          .unique()
          .references('user_id')
          .inTable('users')
      })
        .then(() => console.log(`Created ${tableName} table`))
        .catch(e => console.error(`Error creating ${tableName} table`, e));
    }
  });


  return db;
}


export interface DbUserProfile {

}
