import { configureStore } from '@reduxjs/toolkit';
import adsReducer from './features/ads/adsSlice'

export const store = configureStore({
  reducer: {
    counter: adsReducer}, //ejemplo de store
});
