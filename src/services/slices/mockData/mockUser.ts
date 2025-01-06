import { TAuthResponse } from '@api';

export const mockUserLogin: TAuthResponse = {
  success: true,
  accessToken: 'accessToken',
  refreshToken: 'refreshToken',
  user: {
    email: 'email',
    name: 'name'
  }
};
