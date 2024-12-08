import { createSlice } from '@reduxjs/toolkit';
import { TOrder } from '@utils-types';
import { getOrderByNumber, getOrders } from '../actions/orderActions';

interface IOrderState {
  orders: TOrder[] | null;
  order: TOrder[] | null;
}

const initialState: IOrderState = {
  orders: null,
  order: null
};

export const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  selectors: {
    ordersSelector: (state) => state.orders,
    orderSelector: (state) => state.order
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrders.fulfilled, (state, { payload }) => {
        state.orders = payload;
      })
      .addCase(getOrderByNumber.fulfilled, (state, { payload }) => {
        state.order = payload.orders;
      });
  }
});

export const { ordersSelector, orderSelector } = orderSlice.selectors;
