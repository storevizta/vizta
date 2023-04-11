import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  counter: 0
};

export const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(incrementCounter, (state, action) => { //ejemplo de reducer
      state.counter += 1;
    })
});

