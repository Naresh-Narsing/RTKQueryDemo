import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GITHUB_BASE_URL } from "../Constants";

export const githubServiceApi = createApi({
  reducerPath: "githubApi",
  baseQuery: fetchBaseQuery({
    baseUrl: GITHUB_BASE_URL,
  }),
  endpoints: (builder) => ({
    getGithubUserInfo: builder.query({
      query: (gitUserName) => `users/${gitUserName}`,
    }),
  }),
});

export const { useGetGithubUserInfoQuery } = githubServiceApi;
