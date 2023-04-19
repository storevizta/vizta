import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

export const Message = createApi({
  reducerPath: 'messages',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (builder) => ({
    createMessage: builder.mutation({
      query: (data) => ({
        url: `/message`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useCreateMessageMutation } = Message;
