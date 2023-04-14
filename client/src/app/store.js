import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { Ads } from '../features/slices/adsSlice';

import { Auth } from '../features/slices/authSlice';

export const store = configureStore({
  reducer: {
    [Ads.reducerPath]: Ads.reducer,
    [Auth.reducerPath]: Auth.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Ads.middleware, Auth.middleware),
});
