import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

type Posts = Post[];

const post = createApi({
  reducerPath: "fetchUser",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),

  endpoints: (builder) => ({
    getAllPosts: builder.query<Posts, void>({
      query: () => "/posts",
    }),

    getPostById: builder.query<Post, number>({
      query: (id) => `/posts/${id}`,
    }),
  }),
});

export default post;
