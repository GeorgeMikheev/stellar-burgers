import { createSlice } from '@reduxjs/toolkit';
import { getFeed } from '../actions/feedsActions';
import { TOrdersData } from '@utils-types';

interface IFeedsState {
  feeds: TOrdersData | null;
}

const initialState: IFeedsState = {
  feeds: null
};

export const feedsSlice = createSlice({
  name: 'feedsSlice',
  initialState,
  reducers: {},
  selectors: {
    feedsSelector: (state) => state.feeds
  },
  extraReducers: (builder) => {
    builder.addCase(getFeed.fulfilled, (state, { payload }) => {
      state.feeds = payload;
    });
  }
});

export const { feedsSelector } = feedsSlice.selectors;
