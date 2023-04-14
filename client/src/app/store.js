import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { Ads } from '../features/slices/adsSlice';

import { Auth } from '../features/slices/authSlice';

import { Category } from '../features/slices/categorySlice';

export const store = configureStore({
  reducer: {
    [Ads.reducerPath]: Ads.reducer,
    [Auth.reducerPath]: Auth.reducer,
    [Category.reducerPath]: Category.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      Ads.middleware,
      Auth.middleware,
      Category.middleware
    ),
});
