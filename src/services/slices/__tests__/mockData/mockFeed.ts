import { TFeedsResponse } from '@api';

export const mockFeed: TFeedsResponse = {
  success: true,
  orders: [
    {
      _id: '677021da750864001d376773',
      ingredients: ['643d69a5c3f7b9001cfa093c', '643d69a5c3f7b9001cfa0941'],
      status: 'done',
      name: 'Краторный био-марсианский бургер',
      createdAt: '2024-12-28T16:05:46.152Z',
      updatedAt: '2024-12-28T16:05:47.034Z',
      number: 64509
    }
  ],
  total: 1,
  totalToday: 1
};
