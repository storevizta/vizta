import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './reducer.js';

export const store = configureStore({
  reducer: {
    counter: counterReducer}, //ejemplo de store
});
