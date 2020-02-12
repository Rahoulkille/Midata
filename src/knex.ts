import knex from 'knex';
import { Application } from './declarations';

export default function (app: Application) {
  const { client } = app.get('postgres');

  const connection = {
    host : '127.0.0.1',
    user : 'mauricelecordier',
    password : '',
    database : 'boilerplate'
  }
  const db = knex({ client, connection });

  app.set('knexClient', db);
}
