import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const Ads = createApi({
  reducerPath: 'ads',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://vizta-0hmx.onrender.com' }),
  endpoints: (builder) => ({
    getAds: builder.query({
      query: ({
        page = 0,
        size = 10,
        title = null,
        category = null,
        minPrice = null,
        maxPrice = null,
        sortPrice = null,
        sortTitle = null,
        discount = null,
        condition = null,
      }) => {
        let url = '/product';

        if (
          page ||
          size ||
          title ||
          category ||
          minPrice ||
          maxPrice ||
          sortPrice ||
          sortTitle ||
          discount ||
          condition
        ) {
          url += '?';
          if (page) url += `page=${page}&`;
          if (size) url += `size=${size}&`;
          if (category) url += `category=${category}&`;
          if (title) url += `title=${title}&`;
          if (minPrice) url += `minPrice=${minPrice}&`;
          if (maxPrice) url += `maxPrice=${maxPrice}&`;
          if (sortPrice) url += `sortPrice=${sortPrice}&`;
          if (sortTitle) url += `sortTitle=${sortTitle}&`;
          if (discount) url += `discount=${discount}&`;
          if (condition) url += `condition=${condition}&`;
          url = url.slice(0, -1);
        }

        return url;
      },
    }),
    getAdById: builder.query({
      query: (id) => `/ads/${id}`,
    }),
    createAd: builder.mutation({
      query: (data) => ({
        url: `/ads`,
        method: 'POST',
        body: data,
      }),
    }),
    updateAd: builder.mutation({
      query: (data) => ({
        url: `/ads/updateAd`,
        method: 'PUT',
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAdsQuery,
  useGetAdByIdQuery,
  useCreateAdMutation,
  useUpdateAdMutation,
} = Ads;
