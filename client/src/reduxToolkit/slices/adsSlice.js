import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
  value: 0,
  ads: [],
  allAnuncios: [],
  actualPage: 1,
}

export const adsSlice = createSlice({
  name: 'ad',
  initialState,
  reducers: {
    getAllAds: async (state, action) => {
      const allAds = await axios.get('http://localhost:3001/')

    },
    postAds: async (state, action) => {
      const postAds1 = await axios.post('http://localhost:3001/', payload)
    }
    
  },
});

export const { getAllAds } = adsSlice.actions;
export default adsSlice.reducer;
