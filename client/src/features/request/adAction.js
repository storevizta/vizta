import axios from 'axios';
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk;


export const adPost = createAsyncThunk('ad/adPost', async (payload)=> {
    try {
     const adCreated = await axios.post('http://localhost:3001/ads', payload) //revisar el link
     return adCreated.data
    } catch (error) {
     throw error;
    }
 });

 export const allAdGet = createAsyncThunk('ad/allAdGet', async () => {
    try {
        const allAds = await axios.get('http://localhost:3001/ads')
        return allAds
    } catch (error) {
     throw error;
    }
 })

 export const adById = createAsyncThunk('ad/adById', async ({adId, userId})=> {
    try {
      console.log("productId", productId);
      console.log("userId", userId);
     const ad = await axios.get(`http://localhost:3001/${adId}${userId?'?userId='+ userId : ''}`);
     return ad.data
    } catch (error) {
     throw error;
    }
 });

 export const adUpdate = createAsyncThunk('ad/adUpdate', async (values)=> {
    console.log("Soy el adUpdate")
    console.log(values)
     try {
       console.log({values})
      const ad = await axios.patch(`http://localhost:3001/%${values.id}`, values);
      return ad.data
     } catch (error) {
      throw error;
     }
  });
 
 export const adDelete = createAsyncThunk('ad/adDelete', async (id)=> {
     try {
      const ad = await axios.delete(`http://localhost:3001/${id}`);
      return ad.data
     } catch (error) {
      throw error;
     }
 });
 export const updateAdStock = createAsyncThunk('ad/updateAdStock', async (payload)=> {
    console.log(prod)
    try {
     const ad = await axios.put(`http://localhost:3001/`, payload);
     return ad.data
    } catch (error) {
     throw error;
    }
 });