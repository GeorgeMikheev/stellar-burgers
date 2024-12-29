import { configureStore } from '@reduxjs/toolkit';
import {
  getUser,
  loginUser,
  logout,
  registerUser,
  updateUser
} from '../../actions/userActions';
import { initialState, userSlice } from '../userSlice';
import { mockUserLogin } from './mockData/mockUser';

describe('initialization state', () => {
  it('userSlice initialization test', () => {
    const store = configureStore({ reducer: userSlice.reducer });
    const initialState = store.getState();
    expect(userSlice.reducer(undefined, { type: 'action' })).toEqual(
      initialState
    );
  });
});

describe('Testing the work of reducers for userSlice', () => {
  // tests loginUser:

  it('loginUser.pending testing', () => {
    const action = {
      type: loginUser.pending.type
    };

    const state = userSlice.reducer(initialState, action);

    expect(state.isLoading).toEqual(true);
    expect(state.error).toEqual(null);
  });

  it('loginUser.rejected testing', () => {
    const errorMessage = 'Error message';

    const action = {
      type: loginUser.rejected.type,
      error: { message: errorMessage }
    };

    const state = userSlice.reducer(initialState, action);

    expect(state.isLoading).toEqual(false);
    expect(state.error).toEqual(errorMessage);
  });

  it('loginUser.fulfilled testing', () => {
    const action = {
      type: loginUser.fulfilled.type,
      payload: mockUserLogin
    };

    const state = userSlice.reducer(initialState, action);

    expect(state.isLoading).toEqual(false);
    expect(state.user).toEqual(mockUserLogin.user);
    expect(state.error).toEqual(null);
    expect(state.isInit).toEqual(true);
  });

  // tests registerUser:

  it('registerUser.pending testing', () => {
    const action = {
      type: registerUser.pending.type
    };

    const state = userSlice.reducer(initialState, action);

    expect(state.isLoading).toEqual(true);
    expect(state.error).toEqual(null);
  });

  it('registerUser.rejected testing', () => {
    const errorMessage = 'Error message';

    const action = {
      type: registerUser.rejected.type,
      error: { message: errorMessage }
    };

    const state = userSlice.reducer(initialState, action);

    expect(state.isLoading).toEqual(false);
    expect(state.error).toEqual(errorMessage);
  });

  it('registerUser.fulfilled testing', () => {
    const action = {
      type: registerUser.fulfilled.type,
      payload: mockUserLogin
    };

    const state = userSlice.reducer(initialState, action);

    expect(state.isLoading).toEqual(false);
    expect(state.user).toEqual(mockUserLogin.user);
    expect(state.error).toEqual(null);
    expect(state.isInit).toEqual(true);
  });

  // tests logout:

  it('logout.pending testing', () => {
    const action = {
      type: logout.pending.type
    };

    const state = userSlice.reducer(initialState, action);

    expect(state.isLoading).toEqual(true);
    expect(state.error).toEqual(null);
  });

  it('logout.rejected testing', () => {
    const errorMessage = 'Error message';

    const action = {
      type: logout.rejected.type,
      error: { message: errorMessage }
    };

    const state = userSlice.reducer(initialState, action);

    expect(state.isLoading).toEqual(false);
    expect(state.error).toEqual(errorMessage);
  });

  it('logout.fulfilled testing', () => {
    const action = {
      type: logout.fulfilled.type,
      payload: mockUserLogin
    };

    const state = userSlice.reducer(initialState, action);

    expect(state.isLoading).toEqual(false);
    expect(state.user).toEqual(null);
    expect(state.error).toEqual(null);
    expect(state.isInit).toEqual(false);
  });

  // tests getUser:

  it('getUser.pending testing', () => {
    const action = {
      type: getUser.pending.type
    };

    const state = userSlice.reducer(initialState, action);

    expect(state.isLoading).toEqual(true);
    expect(state.error).toEqual(null);
  });

  it('getUser.rejected testing', () => {
    const errorMessage = 'Error message';

    const action = {
      type: getUser.rejected.type,
      error: { message: errorMessage }
    };

    const state = userSlice.reducer(initialState, action);

    expect(state.isLoading).toEqual(false);
    expect(state.error).toEqual(errorMessage);
  });

  it('getUser.fulfilled testing', () => {
    const action = {
      type: getUser.fulfilled.type,
      payload: mockUserLogin
    };

    const state = userSlice.reducer(initialState, action);

    expect(state.isLoading).toEqual(false);
    expect(state.user).toEqual(mockUserLogin.user);
    expect(state.error).toEqual(null);
    expect(state.isInit).toEqual(true);
  });

  // test updateUser:

  it('updateUser.pending testing', () => {
    const action = {
      type: updateUser.pending.type
    };

    const state = userSlice.reducer(initialState, action);

    expect(state.isLoading).toEqual(true);
    expect(state.error).toEqual(null);
  });

  it('updateUser.rejected testing', () => {
    const errorMessage = 'Error message';

    const action = {
      type: updateUser.rejected.type,
      error: { message: errorMessage }
    };

    const state = userSlice.reducer(initialState, action);

    expect(state.isLoading).toEqual(false);
    expect(state.error).toEqual(errorMessage);
  });

  it('updateUser.fulfilled testing', () => {
    const action = {
      type: updateUser.fulfilled.type,
      payload: mockUserLogin
    };

    const state = userSlice.reducer(initialState, action);

    expect(state.isLoading).toEqual(false);
    expect(state.user).toEqual(mockUserLogin.user);
    expect(state.error).toEqual(null);
    expect(state.isInit).toEqual(true);
  });
});
