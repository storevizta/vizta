import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const User = createApi({
  reducerPath: 'user',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (builder) => ({
    getUserId: builder.query({
      query: (id) => `/users/${id}`,
    }),
  }),
});

// Todavia no se mueve
export const { useGetUserIdQuery } = User;