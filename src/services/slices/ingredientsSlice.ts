import { createSlice } from '@reduxjs/toolkit';
import { TIngredient } from '@utils-types';
import { getIngredients } from '../actions/ingredientsActions';

interface IIngredientsState {
  isLoading: boolean;
  ingredients: TIngredient[] | null;
}

const initialState: IIngredientsState = {
  isLoading: false,
  ingredients: null
};

export const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {},
  selectors: {
    isLoadingSelector: (state) => state.isLoading,
    ingredientSelector: (state) => state.ingredients
  },
  extraReducers: (builder) => {
    builder
      .addCase(getIngredients.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getIngredients.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getIngredients.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.ingredients = payload;
      });
  }
});

export const { isLoadingSelector, ingredientSelector } =
  ingredientsSlice.selectors;
