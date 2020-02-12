import { Service, KnexServiceOptions } from 'feathers-knex';
import { Application } from '../../declarations';
import { Params } from '@feathersjs/feathers';
import uuid from 'uuid';
import { DbUser } from '../../models/users.model';

interface UserData {
  email: string;
  password: string;
}
export class Users extends Service<UserData> {
  constructor(options: Partial<KnexServiceOptions>, app: Application) {
    super({
      ...options,
      name: 'users'
    });
  }

  create (data: UserData, params?: Params) {
    // This is the information we want from the user signup data
    const { email, password } = data;

    // The complete user
    const userData: DbUser = {
      email,
      password,
      user_id: uuid()
    };

    // Call the original `create` method with existing `params` and new data
    return super.create(userData, params);
  }
}
