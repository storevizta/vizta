import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const Ads = createApi({
  reducerPath: 'ads',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://vizta-0hmx.onrender.com' }),
  endpoints: (builder) => ({
    getAds: builder.query({
      query: ({
        page = 0,
        size = 12,
        title = null,
        category = null,
        minPrice = null,
        maxPrice = null,
        sort = null,
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
          sort ||
          condition
        ) {
          url += '?';
          if (page) url += `page=${page}&`;
          if (size) url += `size=${size}&`;
          if (category) url += `category=${category}&`;
          if (title) url += `title=${title}&`;
          if (minPrice) url += `minPrice=${minPrice}&`;
          if (maxPrice) url += `maxPrice=${maxPrice}&`;
          if (sort) url += `sort=${sort}&`;
          if (condition) url += `condition=${condition}&`;
          url = url.slice(0, -1);
        }

        return url;
      },
    }),
    getAdById: builder.query({
      query: (id) => `/product/${id}`,
    }),
    createAd: builder.mutation({
      query: (data) => ({
        url: `/product`,
        method: 'POST',
        body: data,
      }),
    }),
    updateAd: builder.mutation({
      query: (data) => ({
        url: `/product/updateAd`,
        method: 'PUT',
        body: data,
      }),
    }),
    deleteAd: builder.mutation({
      query: (id) => ({
        url: `product/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetAdsQuery,
  useGetAdByIdQuery,
  useCreateAdMutation,
  useUpdateAdMutation,
  useDeleteAdMutation,
} = Ads;
