import { Service, KnexServiceOptions } from 'feathers-knex';
import { Application } from '../../declarations';
import { Params } from '@feathersjs/feathers';

interface UserProfile {
  age: number;
  gender: string;
}
export class UserProfiles extends Service {
  constructor(options: Partial<KnexServiceOptions>, app: Application) {
    super({
      ...options,
      name: 'user_profiles'
    });
  }

  create (data: UserProfile, params?: Params) {
    // This is the information we want from the user signup data
    const { age, gender } = data;

    // The complete user
    const userProfile = {
      age,
      gender,
    };

    // Call the original `create` method with existing `params` and new data
    return super.create(userProfile, params);
  }
}
