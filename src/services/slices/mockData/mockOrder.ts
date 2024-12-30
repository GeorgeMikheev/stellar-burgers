import { TFeedsResponse, TOrderResponse } from '@api';

export const mockOrders: TFeedsResponse = {
  success: true,
  orders: [
    {
      _id: '675314f7e367de001daf749c',
      ingredients: ['643d69a5c3f7b9001cfa0941', '643d69a5c3f7b9001cfa093c'],
      status: 'done',
      name: 'Краторный био-марсианский бургер',
      createdAt: '2024-12-06T15:15:03.349Z',
      updatedAt: '2024-12-06T15:15:04.327Z',
      number: 61767
    },
    {
      _id: '67531549e367de001daf749e',
      ingredients: [
        '643d69a5c3f7b9001cfa0940',
        '643d69a5c3f7b9001cfa0942',
        '643d69a5c3f7b9001cfa093c'
      ],
      status: 'done',
      name: 'Краторный spicy метеоритный бургер',
      createdAt: '2024-12-06T15:16:25.359Z',
      updatedAt: '2024-12-06T15:16:26.260Z',
      number: 61768
    }
  ],
  total: 64135,
  totalToday: 48
};

export const mockOrderByNumber: TOrderResponse = {
  success: true,
  orders: [
    {
      _id: '67535b90e367de001daf7531',
      ingredients: [
        '643d69a5c3f7b9001cfa0941',
        '643d69a5c3f7b9001cfa093f',
        '643d69a5c3f7b9001cfa093c'
      ],
      status: 'done',
      name: 'Краторный бессмертный био-марсианский бургер',
      createdAt: '2024-12-06T20:16:16.614Z',
      updatedAt: '2024-12-06T20:16:17.361Z',
      number: 61785
    }
  ]
};
