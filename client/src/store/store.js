import { configureStore } from '@reduxjs/toolkit';
import { taskSlice } from '../features/tasks/taskSlice.js';

export const store = configureStore({
  reducer: {
    task: taskSlice.Reducer}, //ejemplo de store
});
