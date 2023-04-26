// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query';

// export const Report = createApi({
//   reducerPath: 'report',
//   baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
//   endpoints: (builder) => ({
//     getReportById: builder.query({
//       query: (id) => `/report/${id}`,
//     }),
//     getReportByUserId: builder.query({
//       query: (userId) => `/report/user/${userId}`,
//     }),
//     getReportAdAdId: builder.query({
//       query: (adId) => `/report/ad/${adId}`,
//     }),
//     createReport: builder.mutation({
//       query: (data) => ({
//         url: '/report',
//         method: 'POST',
//         body: data,
//       }),
//     }),
//   }),
// });

// export const {} = Report;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const Report = createApi({
  reducerPath: 'report',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://vizta-0hmx.onrender.com' }),
  endpoints: (builder) => ({
    getAllReports: builder.query({
      query: () => `/report`,
    }),
    getReportById: builder.query({
      query: (id) => `/report/${id}`,
    }),
    getReportByUserId: builder.query({
      query: (userId) => `/report/user/${userId}`,
    }),
    getReportAdAdId: builder.query({
      query: (adId) => `/report/ad/${adId}`,
    }),
    createReport: builder.mutation({
      query: (data) => ({
        url: '/report',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllReportsQuery,
  useGetReportByIdQuery,
  useGetReportByUserIdQuery,
  useGetReportAdAdIdQuery,
  useCreateReportMutation,
} = Report;
