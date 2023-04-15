import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const Auth = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (data) => {
        return {
          url: '/auth/signin',
          method: 'POST',
          body: data,
        };
      },
    }),
    signUp: builder.mutation({
      query: (data) => {
        return {
          url: '/auth/signup',
          method: 'POST',
          body: data,
        };
      },
    }),
    signInGoogle: builder.query({
      query: () => `/auth/signingoogle`,
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation, useSignInGoogleQuery } =
  Auth;
