// Initializes the `user_profiles` service on path `/user-profiles`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { UserProfiles } from './user_profiles.class';
import createModel from '../../models/user_profiles.model';
import hooks from './user_profiles.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'user-profiles': UserProfiles & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/user-profiles', new UserProfiles(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('user-profiles');

  service.hooks(hooks);
}
