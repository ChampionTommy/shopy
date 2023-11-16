import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import config from 'config/environment';

export const productApi = createApi({
  reducerPath: 'api',
  tagTypes: ['Product'],
  baseQuery: fetchBaseQuery({
    baseUrl: config.apiUrl,
  }),
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
      }),
      invalidatesTags: () => [{ type: 'Product' }],
    }),
  }),
});

export const { useGetAllProductsQuery } = productApi;
