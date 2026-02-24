// services/base-api.ts
import { tags, userTags } from "@/constants";
import { getCookie } from "@/services/auth/token-handlers";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      process.env.NEXT_PUBLIC_BASE_API_URL || "http://localhost:5000/api/v1",
    credentials: "include",
    prepareHeaders: async (headers) => {
      const token = await getCookie("accessToken");
      if (token) headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: [...Object.values(tags), ...Object.values(userTags)],
  endpoints: () => ({}),
});
