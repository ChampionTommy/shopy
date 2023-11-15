import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = 'https://api.escuelajs.co/api/v1/';

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['Products'],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (value) => `/products?title=${value}`,
      providesTags: (res, err, value) => [
        {
          type: 'Products',
          id: value,
        },
      ],
    }),
  }),
});

export const { useGetAllProductsQuery } = api;
