import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { Ads } from '../features/query/adsQuery';

import { Auth } from '../features/query/authQuery';

import { Category } from '../features/query/categoryQuery';

import { User } from '../features/query/userQuery';

import FilterSlice from '../features/slices/filterSlice';

import infoUser from '../features/slices/userSlice';

export const store = configureStore({
  reducer: {
    [Ads.reducerPath]: Ads.reducer,
    [Auth.reducerPath]: Auth.reducer,
    [Category.reducerPath]: Category.reducer,
    [User.reducerPath]: User.reducer,
    filter: FilterSlice,
    info_user: infoUser,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      Ads.middleware,
      Auth.middleware,
      Category.middleware,
      User.middleware
    ),
});
