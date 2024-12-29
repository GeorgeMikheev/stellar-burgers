import { PayloadAction, createSlice, nanoid } from '@reduxjs/toolkit';
import { TConstructorIngredient, TIngredient, TOrder } from '@utils-types';
import { orderBurger } from '../actions/constructorActions';

type TConstructor = {
  bun: TConstructorIngredient | null;
  ingredients: TConstructorIngredient[];
};

interface IConstructorState {
  constructorItems: TConstructor;
  orderRequest: boolean;
  orderModalData: TOrder | null;
}

type TMoveIngredient = {
  from: number;
  to: number;
};

const initialState: IConstructorState = {
  constructorItems: {
    bun: null,
    ingredients: []
  },
  orderRequest: false,
  orderModalData: null
};

export const constructorSlice = createSlice({
  name: 'constructorSlice',
  initialState,
  reducers: {
    addIngredients: {
      reducer: (state, action: PayloadAction<TConstructorIngredient>) => {
        if (action.payload.type === 'bun') {
          state.constructorItems.bun = action.payload;
        } else {
          state.constructorItems.ingredients.push(action.payload);
        }
      },
      prepare: (ingredient: TIngredient) => ({
        payload: { ...ingredient, id: nanoid() }
      })
    },
    deleteIngredients: (state, { payload }) => {
      state.constructorItems.ingredients.splice(payload, 1);
    },
    moveToIngredient: (state, action: PayloadAction<TMoveIngredient>) => {
      state.constructorItems.ingredients.splice(
        action.payload.to,
        0,
        state.constructorItems.ingredients.splice(action.payload.from, 1)[0]
      );
    },
    setNullOrderModal: (state) => {
      state.orderModalData = null;
    }
  },
  selectors: {
    constructorItemsSelector: (state) => state.constructorItems,
    orderRequestSelector: (state) => state.orderRequest,
    orderModalDataSelector: (state) => state.orderModalData
  },
  extraReducers: (builder) => {
    builder
      .addCase(orderBurger.fulfilled, (state, { payload }) => {
        state.orderModalData = payload.order;
        state.constructorItems = {
          bun: null,
          ingredients: []
        };
        state.orderRequest = false;
      })
      .addCase(orderBurger.pending, (state) => {
        state.orderRequest = true;
      })
      .addCase(orderBurger.rejected, (state) => {
        state.orderRequest = false;
      });
  }
});

export const {
  constructorItemsSelector,
  orderRequestSelector,
  orderModalDataSelector
} = constructorSlice.selectors;

export const {
  addIngredients,
  deleteIngredients,
  moveToIngredient,
  setNullOrderModal
} = constructorSlice.actions;
