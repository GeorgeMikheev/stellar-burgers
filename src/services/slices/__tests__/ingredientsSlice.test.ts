import { getIngredients } from '../../actions/ingredientsActions';
import { ingredientsSlice, initialState } from '../ingredientsSlice';
import { mockIngredient } from './mockData/mockIngredients';
import { configureStore } from '@reduxjs/toolkit';

describe('initialization state', () => {
  it('ingredientsSlice initialization test', () => {
    const store = configureStore({ reducer: ingredientsSlice.reducer });
    const initialState = store.getState();
    expect(ingredientsSlice.reducer(undefined, { type: 'action' })).toEqual(
      initialState
    );
  });
});

describe('Testing the work of ryuduers for the igredientsSlice', () => {
  it('Processing of the state pending', () => {
    const action = {
      type: getIngredients.pending.type
    };
    const state = ingredientsSlice.reducer(initialState, action);
    expect(state.isLoading).toEqual(true);
  });

  it('Processing of the state rejected', () => {
    const action = {
      type: getIngredients.rejected.type
    };

    const state = ingredientsSlice.reducer(initialState, action);
    expect(state.isLoading).toEqual(false);
  });

  it('Processing of the state fulfilled', () => {
    const action = {
      type: getIngredients.fulfilled.type,
      payload: mockIngredient
    };

    const state = ingredientsSlice.reducer(initialState, action);
    expect(state.isLoading).toEqual(false);
    expect(state.ingredients).toEqual(mockIngredient);
  });
});
