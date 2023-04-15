import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { Ads } from '../features/slices/adsSlice';

import { Auth } from '../features/slices/authSlice';

import { Category } from '../features/slices/categorySlice';

import { User } from '../features/slices/userSlice';

import filterSlice from '../features/slices/filterSlice';

export const store = configureStore({
  reducer: {
    [Ads.reducerPath]: Ads.reducer,
    [Auth.reducerPath]: Auth.reducer,
    [Category.reducerPath]: Category.reducer,
    [User.reducerPath]: User.reducer,
    filter: filterSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      Ads.middleware,
      Auth.middleware,
      Category.middleware,
      User.middleware
    ),
});
