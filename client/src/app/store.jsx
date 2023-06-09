import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { Ads } from '../features/query/AdsQuery';

import { Category } from '../features/query/CategoryQuery';

import { User } from '../features/query/UserQuery';

import { Message } from '../features/query/MessagesQuery';

import { Rating } from '../features/query/RatingQuery';

import { Report } from '../features/query/ReportQuery';

import FilterSlice from '../features/slices/FilterSlice';

import { Admin } from '../features/query/AdminQuery';

import wishlistsSlice from '../features/slices/FavSlices';

import { MercadoPago } from '../features/query/MercadoPagoQuery';

export const store = configureStore({
  reducer: {
    [Ads.reducerPath]: Ads.reducer,
    [Category.reducerPath]: Category.reducer,
    [User.reducerPath]: User.reducer,
    [Message.reducerPath]: Message.reducer,
    [Rating.reducerPath]: Rating.reducer,
    [Report.reducerPath]: Report.reducer,
    [Admin.reducerPath]: Admin.reducer,
    [MercadoPago.reducerPath]: MercadoPago.reducer,
    filter: FilterSlice,
    wishlists: wishlistsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      Ads.middleware,
      Category.middleware,
      User.middleware,
      Message.middleware,
      Rating.middleware,
      Report.middleware,
      Admin.middleware,
      MercadoPago.middleware
    ),
});
