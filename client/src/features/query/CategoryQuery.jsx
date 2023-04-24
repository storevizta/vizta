import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const Category = createApi({
  reducerPath: 'category',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://vizta-0hmx.onrender.com/' }),
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => `/category`,
    }),
  }),
});

export const { useGetCategoryQuery } = Category;
