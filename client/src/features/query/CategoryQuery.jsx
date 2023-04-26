import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const Category = createApi({
  reducerPath: 'category',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => `/category`,
    }),
  }),
});

export const { useGetCategoryQuery } = Category;
