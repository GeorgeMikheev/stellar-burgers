import { getOrderByNumberApi, getOrdersApi } from '@api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getOrders = createAsyncThunk('gteOrder', getOrdersApi);
export const getOrderByNumber = createAsyncThunk(
  'getOrderByNumber',
  getOrderByNumberApi
);
