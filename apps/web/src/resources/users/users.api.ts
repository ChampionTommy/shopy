import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import config from 'config';

const usersApi = createApi({
  reducerPath: 'api',
  tagTypes: ['User'],
  baseQuery: fetchBaseQuery({
    baseUrl: config.apiUrl,
  }),
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (user) => ({
        body: user,
        url: '/user',
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: () => [{ type: 'User' }],
    }),
  }),
});
