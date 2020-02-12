import { Service, KnexServiceOptions } from 'feathers-knex';
import { Application } from '../../declarations';
import { Params } from '@feathersjs/feathers';

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
    const userData = {
      email,
      password,
    };

    // Call the original `create` method with existing `params` and new data
    return super.create(userData, params);
  }
}
