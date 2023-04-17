import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { Ads } from '../features/query/adsQuery';

import { Category } from '../features/query/categoryQuery';

import FilterSlice from '../features/slices/filterSlice';

export const store = configureStore({
  reducer: {
    [Ads.reducerPath]: Ads.reducer,
    [Category.reducerPath]: Category.reducer,
    filter: FilterSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Ads.middleware, Category.middleware),
});
