import assert from 'assert';
import app from '../../src/app';

describe('\'user_profiles\' service', () => {
  it('registered the service', () => {
    const service = app.service('user-profiles');

    assert.ok(service, 'Registered the service');
  });
});
