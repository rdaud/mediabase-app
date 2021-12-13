import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const getAvatarApi = createApi({
  reducerPath: 'avatarApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'localhost:3001/users/me' }),
  endpoints: (builder) => ({
    getAvatarById: builder.query({
      query: (id) => `users/${id}/avatar`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAvatarByIdQuery } = getAvatarApi