import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const MercadoPago = createApi({
  reducerPath: 'mercadopago',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://vizta-0hmx.onrender.com' }),
  endpoints: (builder) => ({
    getSubscribeAds: builder.query({
      query: () => '/mercadopago/subscribeproducts',
    }),
    // subscribe: builder.mutation({
    //   query: (data) => ({
    //     url: `/mercadopago/subscribeuser`,
    //     method: 'POST',
    //     body: data,
    //   }),
    // }),
  }),
});

export const { useGetSubscribeAdsQuery } = MercadoPago;
