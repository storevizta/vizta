import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query';
import {  } from '@reduxjs/toolkit/query/react';

export const Report = createApi({
    reducerPath: "report",
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/'}),
    endPoints: (builder) => ({
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
              url: `/report`,
              method: 'POST',
              body: data,
            }),
          }),
    }),
})

export const {
    useCreateReportMutation,
    useGetReportByIdQuery,
    useGetReportByUserIdQuery,
    useReportAdAdIdQuery,
  } = Rating;