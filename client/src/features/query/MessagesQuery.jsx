import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

export const Message = createApi({
  reducerPath: 'messages',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://vizta-0hmx.onrender.com/' }),
  endpoints: (builder) => ({
    getMessage: builder.query({
      query: () => '/message',
    }),
    getMessageById: builder.query({
      query: (id) => `/message/${id}`,
    }),
    getMessageByAdId: builder.query({
      query: (id) => `/users/admessages/${id}`,
    }),
    responseMessage: builder.mutation({
      query: (data) => ({
        url: '/message',
        method: 'PUT',
        body: data,
      }),
    }),
    createMessage: builder.mutation({
      query: (data) => ({
        url: `/message`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {
  useCreateMessageMutation,
  useGetMessageQuery,
  useResponseMessageMutation,
  useGetMessageByIdQuery,
  useGetMessageByAdIdQuery,
} = Message;
