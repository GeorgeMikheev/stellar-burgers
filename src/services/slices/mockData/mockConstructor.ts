import { TNewOrderResponse } from '@api';

export const mockConstructor: TNewOrderResponse = {
  success: true,
  order: {
    _id: 'string',
    status: 'string',
    name: 'string',
    createdAt: 'string',
    updatedAt: 'string',
    number: 1,
    ingredients: []
  },
  name: 'aaaa'
};
