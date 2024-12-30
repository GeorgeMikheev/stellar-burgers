import { configureStore, nanoid } from '@reduxjs/toolkit';
import {
  IConstructorState,
  addIngredients,
  constructorSlice,
  deleteIngredients,
  initialState,
  moveToIngredient,
  setNullOrderModal
} from '../constructorSlice';
import { mockIngredient } from '../mockData/mockIngredients';
import { orderBurger } from '../../actions/constructorActions';
import { mockConstructor } from '../mockData/mockConstructor';

describe('initialization state', () => {
  it('constructorSlice initialization test', () => {
    const store = configureStore({ reducer: constructorSlice.reducer });
    const initialState = store.getState();
    expect(constructorSlice.reducer(undefined, { type: 'action' })).toEqual(
      initialState
    );
  });
});

describe('constuctorSlice synс action tests', () => {
  it('Test Adding the ingredient to the designer', () => {
    const state = constructorSlice.reducer(
      initialState,
      addIngredients(mockIngredient[1])
    );
    expect(state.constructorItems.ingredients[0]).toEqual({
      ...mockIngredient[1],
      id: expect.any(String)
    });
  });

  it('Test for adding a roll to the constructor', () => {
    const state = constructorSlice.reducer(
      initialState,
      addIngredients(mockIngredient[0])
    );
    expect(state.constructorItems.bun).toEqual({
      ...mockIngredient[0],
      id: expect.any(String)
    });
  });

  it('Ingredient removal test', () => {
    const ingredient = {
      ...mockIngredient[1],
      id: nanoid()
    };

    const newState: IConstructorState = {
      constructorItems: {
        bun: null,
        ingredients: [ingredient]
      },
      orderRequest: false,
      orderModalData: null
    };

    const state = constructorSlice.reducer(
      newState,
      deleteIngredients(ingredient)
    );
    expect(state.constructorItems.ingredients).toHaveLength(0);
  });

  it('Test Changing the order of ingredients in the constructor', () => {
    const ingredient_1 = {
      ...mockIngredient[1],
      id: 'i_1'
    };

    const ingredient_2 = {
      ...mockIngredient[2],
      id: 'i_2'
    };

    const newState: IConstructorState = {
      constructorItems: {
        bun: null,
        ingredients: [ingredient_1, ingredient_2]
      },
      orderRequest: false,
      orderModalData: null
    };

    const state = constructorSlice.reducer(
      newState,
      moveToIngredient({ from: 0, to: 1 })
    );

    expect(state.constructorItems.ingredients).toEqual([
      ingredient_2,
      ingredient_1
    ]);
  });

  it('Test for set null modal the constructor', () => {
    const newState: IConstructorState = {
      constructorItems: {
        bun: null,
        ingredients: []
      },
      orderRequest: false,
      orderModalData: {
        _id: 'string',
        status: 'string',
        name: 'string',
        createdAt: 'string',
        updatedAt: 'string',
        number: 1,
        ingredients: []
      }
    };

    const state = constructorSlice.reducer(newState, setNullOrderModal());
    expect(state.orderModalData).toEqual(null);
  });
});

describe('constuctorSlice asynс action tests', () => {
  it('orderBurger.fulfilled test', () => {
    const action = {
      type: orderBurger.fulfilled.type,
      payload: mockConstructor
    };

    const state = constructorSlice.reducer(initialState, action);
    expect(state.orderModalData).toEqual(mockConstructor.order);
    expect(state.constructorItems).toEqual(initialState.constructorItems);
    expect(state.orderRequest).toEqual(false);
  });

  it('orderBurger.pending test', () => {
    const action = {
      type: orderBurger.pending.type
    };

    const state = constructorSlice.reducer(initialState, action);
    expect(state.orderRequest).toEqual(true);
  });

  it('orderBurger.rejected', () => {
    const action = {
      type: orderBurger.rejected.type
    };

    const state = constructorSlice.reducer(initialState, action);
    expect(state.orderRequest).toEqual(false);
  });
});
