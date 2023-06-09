import { createSlice } from '@reduxjs/toolkit';

export const FilterSlice = createSlice({
  name: 'filter',

  initialState: {
    page: 0,
    title: '',
    category: '',
    minPrice: '',
    maxPrice: '',
    sort: '',
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
      state.sort = '';
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
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setCondition: (state, action) => {
      state.condition = action.payload;
    },
    resetFilters: (state) => {
      state.page = 0;
      state.category = '';
      state.minPrice = '';
      state.maxPrice = '';
      state.sort = '';
      state.condition = '';
    },
    resetHome: (state) => {
      state.page = 0;
      state.title = '';
      state.category = '';
      state.minPrice = '';
      state.maxPrice = '';
      state.sort = '';
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
  setCondition,
  resetFilters,
  resetHome,
} = FilterSlice.actions;

export default FilterSlice.reducer;
