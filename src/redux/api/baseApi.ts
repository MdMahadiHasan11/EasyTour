import config from "@/config";
import { tags, userTags } from "@/constants";
// import { signout, updateToken } from "@/service/auth";
import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
  baseUrl: `${config.host}/api/v1`,
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState; // ✅ type-safe
    const token = state?.auth.accessToken; // ✅ now TypeScript knows type
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
  credentials: "include",
});

const baseQueryWithRefreshToken: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  // Run original query
  let result = await baseQuery(args, api, extraOptions);

  // If Unauthorized → try refresh
  if (result.error?.status === 401) {
    const refreshResult = await baseQuery(
      { url: "/auth/refresh-token", method: "POST" },
      api,
      extraOptions,
    );

    if (refreshResult.data && typeof refreshResult.data === "object") {
      // Update Redux token
      api.dispatch(updateToken(refreshResult.data));

      // Retry original request
      result = await baseQuery(args, api, extraOptions);
    } else {
      // Refresh failed → force logout
      await signout();
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  tagTypes: [...Object.values(tags), ...Object.values(userTags)],
  endpoints: () => ({}),
});
