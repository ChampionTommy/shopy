import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Post } from '@types';

export const marketplaceService = createApi({
  reducerPath: 'marketplaceService',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (builder) => ({
    listProducts: builder.query<Post[], never[] | void>({
      query: () => 'products',
    }),
  }),
});

export const { useListProductsQuery } = marketplaceService;
