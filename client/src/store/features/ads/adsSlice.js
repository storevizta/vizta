import { createSlice } from '@reduxjs/toolkit';

export const adsSlice = createSlice({
  name: 'ad',
  initialState: [],
  reducers: {
    getAllAds: (state, action) => {
      const allAds = state.push('Traeremos todos los anuncios');
    },
  },
});

export const { getAllAds } = adsSlice.actions;
export default adsSlice.reducer;
