import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://tech-net-server.vercel.app/' }),
  tagTypes: ['Comments'],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => 'products',
    }),
    getProduct: builder.query({
      query: (id) => `product/${id}`,
    }),
    postComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/comment/${id}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Comments'],
    }),
    getComments: builder.query({
      query: (id) => `comment/${id}`,
      providesTags: ['Comments'],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductQuery,
  usePostCommentMutation,
  useGetCommentsQuery,
} = api;
