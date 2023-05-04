import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const Admin = createApi({
  reducerPath: 'admin',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://vizta-0hmx.onrender.com' }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => `/admin/users`,
    }),
    getIdUsers: builder.query({
      query: (id) => `/admin/users/${id}`,
    }),
    controlleBan: builder.mutation({
      query: (data) => ({
        url: `admin/access/`,
        method: 'PUT',
        body: data,
      }),
      }),
    getMetrics: builder.query({
      query: () => `/admin`,
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `admin/users/${id}`,
        method: 'DELETE',
      }),
       }),
    updateUser: builder.mutation({
     query: (id) => ({
      url: `admin/users/${id}`,
      method: 'PUT',
      body: data,
      }),
      }),
    getAllAds: builder.query({
      query: () => `/admin/ads`,
    }),
    getIdAds: builder.query({
      query: (id) => `/admin/ads/${id}`,
    }),
    updatedAds: builder.mutation({
      query: (id) => ({
       url: `admin/ads/${id}`,
       method: 'PUT',
       body: data,
       }),
       }),
    deletedAds: builder.mutation({
      query: (id) => ({
        url: `admin/ads/${id}`,
        method: 'DELETE',
      }),
      }),
    createCategory: builder.mutation({
      query: (name) => ({
        url: `category`,
        method: 'POST',
        body: name
      }),
      }),
})
});



export const { useGetAllUsersQuery,
useGetIdUsersQuery,
useControlleBanMutation,
useGetMetricsQuery,
useDeleteUserMutation,
useUpdateUserMutation,
useGetAllAdsQuery,
useGetIdAdsQuery,
useUpdatedAdsMutation,
useDeletedAdsMutation,
useCreateCategoryMutation,
} = Admin;

