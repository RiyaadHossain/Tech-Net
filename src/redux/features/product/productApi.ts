import { api } from '@/redux/api/apiSlice';

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => 'products',
    }),
    getProduct: builder.query({
      query: (id: string) => `product/${id}`,
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
      query: (id: string) => `comment/${id}`,
      providesTags: ['Comments'],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductQuery,
  usePostCommentMutation,
  useGetCommentsQuery,
} = productApi;
