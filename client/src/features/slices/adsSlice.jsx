import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const Ads = createApi({
  reducerPath: 'ads',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (builder) => ({
    getAds: builder.query({
      query: ({ title = null, category = null }) => {
        let url = '/ads';

        if (title || category) {
          url += '?';
          if (category) url += `category=${category}&`;
          if (title) url += `title=${title}&`;
          url = url.slice(0, -1);
        }

        return url;
      },
    }),
    getAdById: builder.query({
      query: (id) => `/ads/${id}`,
    }),
  }),
});

export const { useGetAdsQuery, useGetAdByIdQuery } = Ads;
