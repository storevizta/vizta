import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',

  initialState: {
    page: 0,
    title: '',
    category: '',
    minPrice: '',
    maxPrice: '',
    sort: '',
    discount: '',
    condition: '',
  },

  reducers: {
    setPage: (state, action) => {
      const newPage = state.page + action.payload;
      state.page = newPage >= 0 ? newPage : 0;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setMinPrice: (state, action) => {
      state.minPrice = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setDiscount: (state, action) => {
      state.discount = action.payload;
    },
    setCondition: (state, action) => {
      state.condition = action.payload;
    },
    resetFilters: (state) => {
      state.page = 0;
      state.title = '';
      state.category = '';
      state.minPrice = '';
      state.maxPrice = '';
      state.sort = '';
      state.discount = '';
      state.condition = '';
    },
  },
});

export const {
  setPage,
  setTitle,
  setCategory,
  setMinPrice,
  setMaxPrice,
  setSort,
  setDiscount,
  setCondition,
  resetFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
