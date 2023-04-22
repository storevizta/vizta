import { createSlice } from '@reduxjs/toolkit';

export const FilterSlice = createSlice({
  name: 'filter',

  initialState: {
    page: 0,
    title: '',
    category: '',
    minPrice: '',
    maxPrice: '',
    sortPrice: '',
    sortTitle: '',
    discount: '',
    condition: '',
  },

  reducers: {
    setPage: (state, action) => {
      const newPage = action.payload;
      state.page = newPage >= 0 ? newPage : 0;
    },
    setTitle: (state, action) => {
      state.category = '';
      state.minPrice = '';
      state.maxPrice = '';
      state.sortPrice = '';
      state.sortTitle = '';
      state.discount = '';
      state.condition = '';
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
    setSortPrice: (state, action) => {
      state.sortPrice = action.payload;
    },
    setSortTitle: (state, action) => {
      state.sortTitle = action.payload;
    },
    setDiscount: (state, action) => {
      state.discount = action.payload;
    },
    setCondition: (state, action) => {
      state.condition = action.payload;
    },
    resetFilters: (state) => {
      state.page = 0;
      state.category = '';
      state.minPrice = '';
      state.maxPrice = '';
      state.sortPrice = '';
      state.sortTitle = '';
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
  setSortPrice,
  setSortTitle,
  setDiscount,
  setCondition,
  resetFilters,
} = FilterSlice.actions;

export default FilterSlice.reducer;
