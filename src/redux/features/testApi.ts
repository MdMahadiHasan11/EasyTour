// import { tags } from "@/constants";
// import { Account, TArgsParam, TResponseRedux } from "@/types";
// import { baseApi } from "../../api/baseApi";

// const url = "/account";

// const accountApi = baseApi.injectEndpoints({
//   endpoints: (builder) => ({
//     getAllAccount: builder.query({
//       query: (args: TArgsParam) => {
//         const cleanedParams = Object.entries(args || {}).reduce(
//           (acc, [key, value]) => {
//             if (
//               value !== null &&
//               value !== undefined &&
//               value !== "" &&
//               value !== "all"
//             ) {
//               acc[key] = value;
//             }
//             return acc;
//           },
//           {} as TArgsParam,
//         );

//         return {
//           url: url,
//           params: cleanedParams,
//         };
//       },
//       transformResponse: (response: TResponseRedux<Account[]>) => {
//         return {
//           data: response.data,
//           metadata: response.metadata,
//         };
//       },
//       providesTags: [tags.accountTag],
//     }),
//     getAccountDetails: builder.query({
//       query: (id) => {
//         return {
//           url: `${url}/${id}`,
//         };
//       },
//       transformResponse: (response: TResponseRedux<Account>) => {
//         return response.data;
//       },
//       providesTags: [tags.accountTag],
//     }),
//     createAccount: builder.mutation({
//       query: (data) => {
//         return {
//           url: url,
//           method: "POST",
//           body: data,
//         };
//       },
//       transformResponse: (response: TResponseRedux<Account>) => {
//         return {
//           data: response.data,
//         };
//       },
//       invalidatesTags: [tags.accountTag, tags.accountTag],
//     }),
//     updateAccount: builder.mutation({
//       query: ({ id, data }) => {
//         return {
//           url: `${url}/${id}`,
//           method: "PATCH",
//           body: data,
//         };
//       },
//       transformResponse: (response: TResponseRedux<Account>) => {
//         return {
//           data: response.data,
//         };
//       },
//       invalidatesTags: [tags.accountTag],
//     }),
//   }),
// });

// export const {
//   useGetAllAccountQuery,
//   useCreateAccountMutation,
//   useGetAccountDetailsQuery,
//   useUpdateAccountMutation,
// } = accountApi;
