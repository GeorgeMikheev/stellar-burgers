import { configureStore } from '@reduxjs/toolkit';
import { getFeed } from '../../actions/feedsActions';
import { feedsSlice, initialState } from '../feedSlice';
import { mockFeed } from './mockData/mockFeed';

describe('initialization state', () => {
  it('feedSlice initialization test', () => {
    const store = configureStore({ reducer: feedsSlice.reducer });
    const initialState = store.getState();
    expect(feedsSlice.reducer(undefined, { type: 'action' })).toEqual(
      initialState
    );
  });
});

describe('Fulfilled tests', () => {
  it('Getfedapi.fulfilled state test', () => {
    const action = { type: getFeed.fulfilled.type, payload: mockFeed };
    const state = feedsSlice.reducer(initialState, action);
    expect(state.feeds).toEqual(mockFeed);
  });
});
