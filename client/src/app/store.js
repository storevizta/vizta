import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { Ads } from '../features/slices/adsSlice';

export const store = configureStore({
  reducer: {
    [Ads.reducerPath]: Ads.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Ads.middleware),
});
