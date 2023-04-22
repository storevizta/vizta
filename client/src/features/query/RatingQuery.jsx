import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query';
import {  } from '@reduxjs/toolkit/query/react';

export const Rating = createApi({
    reducerPath: 'rating',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
    endpoints: (builder) => ({
      getRating: builder.query({
        query: () => '/rating',
      }),
      getRatingById: builder.query({
        query: (id) => `/rating/${id}`,
      }),
      getRatingByUserId: builder.mutation({
        query: (data) => ({
            url: `/rating`,
            method: 'GET',
            body: data,
          }),
        }),
      createRating: builder.mutation({
        query: (data) => ({
          url: `/rating`,
          method: 'POST',
          body: data,
        }),
      }),
    }),
})

export const {
    usecreateRatingMutation,
    useGetRatingQuery,
    useGetRatingByUserIdMutation,
    useGetRatingByIdQuery,
  } = Rating;