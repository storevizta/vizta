import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const Admin = createApi({
  reducerPath: 'admin',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://vizta-0hmx.onrender.com' }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => `admin/users`,
    }),
  }),
});

export const { useGetAllUsersQuery } = Admin;
