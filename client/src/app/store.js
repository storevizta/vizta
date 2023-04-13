import { configureStore } from '@reduxjs/toolkit';

// import { adsReducer } from '../features/slices/adsSlice';

export const store = configureStore({
  reducer: {
    // ad: adsReducer,
  }, //ejemplo de store
});
