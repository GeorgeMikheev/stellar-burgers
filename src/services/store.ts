import { combineSlices, configureStore } from '@reduxjs/toolkit';

import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';
import { userSlice } from './slices/userSlice';
import { ingredientsSlice } from './slices/ingredientsSlice';
import { orderSlice } from './slices/orderSlice';
import { feedsSlice } from './slices/feedSlice';
import { constructorSlice } from './slices/constructorSlice';

export const rootReducer = combineSlices(
  userSlice,
  ingredientsSlice,
  orderSlice,
  feedsSlice,
  constructorSlice
);

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export default store;
