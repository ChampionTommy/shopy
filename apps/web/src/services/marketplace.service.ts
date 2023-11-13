import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '@types';

export const marketplaceService = createApi({
  reducerPath: 'marketplaceService',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.escuelajs.co/api/v1' }),
  endpoints: (builder) => ({
    listProducts: builder.query<
    Product[],
    {
      offset?: number;
      limit?: string;
    }
    >({
      query: ({ offset, limit }) => ({
        url: '/products/?',
        method: 'GET',
        params: {
          offset,
          limit,
        },
      }),
    }),
  }),
});

export const { useListProductsQuery } = marketplaceService;
