import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',

  initialState: {
    title: '',
    category: '',
  },

  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { setTitle, setCategory } = filterSlice.actions;

export default filterSlice.reducer;
