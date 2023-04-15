import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createSlice } from '@reduxjs/toolkit';

export const User = createApi({
  reducerPath: 'user',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (builder) => ({
    getUserId: builder.query({
      query: (id) => `/users/${id}`,
    }),
  }),
});

export const infoUser = createSlice({
  name: 'info_user',

  initialState: {
    id: "",
    name: '',
    email: '',
    role: ''
  },

  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setRole: (state, action) => {
      state.role = action.payload;
    },
    resetInfo: (state) => {
      state.id = "",
      state.name = '',
      state.email = '',
      state.role = ''
    },
  },
});

export const {
  setId,
  setName,
  setEmail,
  setRole,
  resetInfo
} = infoUser.actions;

export default infoUser.reducer;

export const { useGetUserIdQuery } = User;