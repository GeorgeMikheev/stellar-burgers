import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../../store';

describe('rootReducer tests', () => {
  it('Rootreducer initialization test', () => {
    const store = configureStore({ reducer: rootReducer });
    const initialState = store.getState();
    expect(rootReducer(undefined, { type: 'action' })).toEqual(initialState);
  });
});
