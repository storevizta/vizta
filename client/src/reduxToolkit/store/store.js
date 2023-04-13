import { configureStore } from '@reduxjs/toolkit';
import { adsReducer } from './slices/adsSlice.js';

export const store = configureStore({
  reducer: {
    ad: adsReducer}, //ejemplo de store
});
