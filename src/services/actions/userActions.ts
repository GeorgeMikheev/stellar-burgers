import {
  getUserApi,
  loginUserApi,
  logoutApi,
  registerUserApi,
  updateUserApi
} from '@api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const loginUser = createAsyncThunk('login', loginUserApi);
export const registerUser = createAsyncThunk('register', registerUserApi);
export const logout = createAsyncThunk('logout', logoutApi);
export const getUser = createAsyncThunk('getUser', getUserApi);
export const updateUser = createAsyncThunk('updateUser', updateUserApi);
