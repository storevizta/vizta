import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const Admin = createApi({
  reducerPath: 'admin',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => `admin/users`,
    }),
  }),
});

export const { useGetAllUsersQuery } = Admin;
