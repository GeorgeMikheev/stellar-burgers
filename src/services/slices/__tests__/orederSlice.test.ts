import { initialState, orderSlice } from '../orderSlice';
import { getOrderByNumber, getOrders } from '../../actions/orderActions';
import { mockOrderByNumber, mockOrders } from '../mockData/mockOrder';
import { configureStore } from '@reduxjs/toolkit';

describe('initialization state', () => {
  it('orderSlice initialization test', () => {
    const store = configureStore({ reducer: orderSlice.reducer });
    const initialState = store.getState();
    expect(orderSlice.reducer(undefined, { type: 'action' })).toEqual(
      initialState
    );
  });
});

describe('Testing the work of reducers for orderSlice', () => {
  it('getOrders.fulfilled state test', () => {
    const action = {
      type: getOrders.fulfilled.type,
      payload: mockOrders.orders
    };

    const state = orderSlice.reducer(initialState, action);
    expect(state.orders).toEqual(mockOrders.orders);
  });

  it('getOrderByNumber.fulfilled state test', () => {
    const action = {
      type: getOrderByNumber.fulfilled.type,
      payload: mockOrderByNumber
    };

    const state = orderSlice.reducer(initialState, action);
    expect(state.order).toEqual(mockOrderByNumber.orders);
  });
});
