// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query';

// export const Rating = createApi({
//   reducerPath: 'rating',
//   baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
//   endpoints: (builder) => ({
//     getRating: builder.query({
//       query: () => '/rating',
//     }),
//     getRatingById: builder.query({
//       query: (id) => `/rating/${id}`,
//     }),
//     getRatingByUserId: builder.query({
//       query: (userId) => `/rating/user/${userId}`,
//     }),
//     createRating: builder.mutation({
//       query: (data) => ({
//         url: `/rating`,
//         method: 'POST',
//         body: data,
//       }),
//     }),
//   }),
// });

// export const {
//   useCreateRatingMutation,
//   useGetRatingQuery,
//   useGetRatingByUserIdQuery,
//   useGetRatingByIdQuery,
// } = Rating;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const Rating = createApi({
  reducerPath: 'rating',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://vizta-0hmx.onrender.com/' }),
  endpoints: (builder) => ({
    getRating: builder.query({
      query: () => '/rating',
    }),
    getRatingById: builder.query({
      query: (id) => `/rating/${id}`,
    }),
    getRatingByUserId: builder.query({
      query: (userId) => `/rating/user/${userId}`,
    }),
    createRating: builder.mutation({
      query: (data) => ({
        url: `/rating`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {
  useGetRatingQuery,
  useGetRatingByIdQuery,
  useGetRatingByUserIdQuery,
  useCreateRatingMutation,
} = Rating;
