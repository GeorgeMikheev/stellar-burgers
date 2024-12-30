import { createSlice } from '@reduxjs/toolkit';
import { TUser } from '@utils-types';
import {
  getUser,
  loginUser,
  logout,
  registerUser,
  updateUser
} from '../actions/userActions';
import { deleteCookie, setCookie } from '../../utils/cookie';

export interface IUserState {
  isInit: boolean;
  isLoading: boolean;
  user: TUser | null;
  error: string | null;
}

export const initialState: IUserState = {
  isInit: false,
  isLoading: false,
  user: null,
  error: null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  selectors: {
    isInitSelector: (state) => state.isInit,
    isLoadingSelector: (state) => state.isLoading,
    userSelector: (state) => state.user,
    errorSelector: (state) => state.error
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error.message as string;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
        state.error = null;
        state.isInit = true;
        localStorage.setItem('refreshToken', payload.refreshToken);
        setCookie('accessToken', payload.accessToken);
      })
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error.message as string;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
        state.error = null;
        state.isInit = true;
        localStorage.setItem('refreshToken', payload.refreshToken);
        setCookie('accessToken', payload.accessToken);
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logout.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error.message as string;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null;
        state.error = null;
        state.isInit = false;
        localStorage.removeItem('refreshToken');
        deleteCookie('accessToken');
      })
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getUser.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error.message as string;
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isInit = true;
        state.error = null;
        state.user = payload.user;
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateUser.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error.message as string;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isInit = true;
        state.error = null;
        state.user = payload.user;
      });
  }
});

export const {
  isInitSelector,
  isLoadingSelector,
  userSelector,
  errorSelector
} = userSlice.selectors;
