import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.worldnewsapi.com/",
    prepareHeaders: (headers) => {
      headers.set("x-api-key", `${import.meta.env.API_KEY}`);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    // getTopNews: builder.query({ query: () => "top-news?source-country=in&language=en" }),
    getNewsDetails: builder.query({
      query: ({ term }) => `retrieve-news?ids=${term}`,
    }),
  }),
});

export const {
  // useGetTopNewsQuery,
  useGetSongDetailsQuery,
} = newsApi;
