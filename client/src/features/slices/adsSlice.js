import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const Ads = createApi({
  reducerPath: 'ads',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (builder) => ({
    getAds: builder.query({
      query: () => `/ads`,
    }),
    getAdById: builder.query({
      query: (id) => `/ads/${id}`,
    }),
  }),
});

export const { useGetAdsQuery, useGetAdByIdQuery } = Ads;
