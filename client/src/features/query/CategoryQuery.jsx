import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const Category = createApi({
  reducerPath: 'category',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://vizta-0hmx.onrender.com' }),
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => `/category`,
    }),
    createCategory: builder.mutation({
      query: (data) => ({
        url: `/category`,
        method: 'POST',
        body: data,
      }),
    }),
    deleteCategory: builder.mutation({
      query: (name) => ({
        url: `/category/${name}`,
        method: 'DELETE',
      }),
      }),
  }),
});

export const { useGetCategoryQuery, useCreateCategoryMutation, useDeleteCategoryMutation } = Category;
