import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { Ads } from '../features/slices/adsSlice';

import { Category } from '../features/slices/categorySlice';

export const store = configureStore({
  reducer: {
    [Ads.reducerPath]: Ads.reducer,
    [Category.reducerPath]: Category.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Ads.middleware, Category.middleware),
});
