import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const User = createApi({
  reducerPath: 'user',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (builder) => ({
    getUserId: builder.query({
      query: (id) => `/users/${id}`,
    }),
    createUser: builder.mutation({
      query: (data) => ({
        url: '/users',
        method: 'POST',
        body: data,
      }),
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: `/users`,
        method: 'PUT',
        body: data,
      }),
    }),
    getUserAds: builder.query({
      query: (id) => `/users/userads/${id}`,
    }),
    getUserMessages: builder.query({
      query: (id) => `users/usermessages/${id}`,
    }),
  }),
});

export const {
  useGetUserIdQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useGetUserAdsQuery,
  useGetUserMessagesQuery,
} = User;
