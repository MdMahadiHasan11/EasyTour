/* eslint-disable @typescript-eslint/no-explicit-any */
import { tags } from "@/constants";
import { TArgsParam, TResponseRedux } from "@/types/global";
import { baseApi } from "../../api/baseApi";

const doctorScheduleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAvailableSchedule: builder.query({
      query: (args: TArgsParam) => {
        const cleanedParams = Object.entries(args || {}).reduce(
          (acc, [key, value]) => {
            if (
              value !== null &&
              value !== undefined &&
              value !== "" &&
              value !== "all"
            ) {
              acc[key] = value;
            }
            return acc;
          },
          {} as TArgsParam,
        );

        return {
          url: "/user/me",
          params: cleanedParams,
        };
      },
      transformResponse: (response: TResponseRedux<any[]>) => {
        return {
          data: response.data,
          metadata: response.metadata,
        };
      },
      providesTags: [tags.availableSchedulesTag],
    }),
  }),
});

export const { useGetAvailableScheduleQuery } = doctorScheduleApi;
