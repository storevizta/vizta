import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const User = createApi({
    reducerPath: "users",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3001/"}),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => `/users`,
        }),
        getUserById: builder.query({
            query: (userId) => `/users/${userId}`
        })
    })
});

export const { useGetUsersQuery, useGetUserByIdQuery } = User;