import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const headers = {
    'Content-Type': 'application/json',
}

const createRequest = (url) => ({ url, headers })

export const formatosApi = createApi({
    reducerPath: 'formatosApi',
    baseQuery: fetchBaseQuery({ baseUrl: '127.0.0.1' }),
    endpoints: (builder) => ({
      getFormatos: builder.query({
        query: (name) => createRequest('/formats')
      }),
    }),
  })
  
  // Export hooks for usage in function components, which are
  // auto-generated based on the defined endpoints
  export const { useGetFormatosApi } = formatosApi