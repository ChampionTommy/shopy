import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import config from 'config/environment';
import { values } from 'lodash';

export const productApi = createApi({
  reducerPath: 'api',
  tagTypes: ['Product'],
  baseQuery: fetchBaseQuery({
    baseUrl: config.apiUrl,
  }),
  refetchOnFocus: true,
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (searchResult) => `/products?title=${searchResult.searchValue}&price_min=${searchResult.minPrice}&price_max=${searchResult.maxPrice}`,
      providesTags: (res, err, value) => [
        {
          type: 'Product',
          id: value,
        },
      ],
    }),
    createProduct: builder.mutation({
      query: (product) => ({
        body: product,
        url: '/products',
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: () => [{ type: 'Product' }],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        body: id,
        url: `/products/${id}`,
        method: 'DELETE',
        invalidatesTags: () => [{ type: 'Product', id }],
      }),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
} = productApi;
