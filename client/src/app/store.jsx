import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { Ads } from '../features/query/adsQuery';

import { Category } from '../features/query/categoryQuery';

import { User } from '../features/query/UserQuery';

import { Message } from '../features/query/MessagesQuery';

import { Rating } from '../features/query/RatingQuery';

import { Report } from '../features/query/ReportQuery';

import FilterSlice from '../features/slices/filterSlice';

import  wishlistsSlice from '../features/slices/FavSlices';

export const store = configureStore({
  reducer: {
    [Ads.reducerPath]: Ads.reducer,
    [Category.reducerPath]: Category.reducer,
    [User.reducerPath]: User.reducer,
    [Message.reducerPath]: Message.reducer,
    [Rating.reducerPath]: Rating.reducer,
    [Report.reducerPath]: Report.reducer,
    filter: FilterSlice,
    wishlists: wishlistsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      Ads.middleware,
      Category.middleware,
      User.middleware,
      Message.middleware,
      Report.middleware,
      Rating.middleware
    ),
});
