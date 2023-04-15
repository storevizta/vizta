import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',

  initialState: {
    currentPage: '',
    page: '',
    title: '',
    category: '',
    minPrice: '',
    maxPrice: '',
    sort: '',
    discount: '',
  },

  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
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
    resetFilters: (state) => {
      state.page = '';
      state.title = '';
      state.category = '';
      state.minPrice = '';
      state.maxPrice = '';
      state.sort = '';
      state.discount = '';
    },
  },
});

export const {
  setCurrentPage,
  setPage,
  setTitle,
  setCategory,
  setMinPrice,
  setMaxPrice,
  setSort,
  setDiscount,
  resetFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
