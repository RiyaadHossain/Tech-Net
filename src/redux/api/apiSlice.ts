import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://tech-net-server.vercel.app/' }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => 'products',
    }),
    getProduct: builder.query({
      query: (id) => `product/${id}`,
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductQuery } = api;
