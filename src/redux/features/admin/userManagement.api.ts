import { baseApi } from "../../api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    myBookings: builder.query({
      query: () => ({
        url: "/api/my-bookings",
        method: "GET",
      }),
    }),
    allUser: builder.query({
      query:()=>({
        url:'/api/auth/users',
        method:"GET"
      })
    }),
    updateUserRole: builder.mutation({
      query: ({ userId, role }: { userId: string; role: "admin" | "user" }) => ({
        url: `/api/auth/role/${userId}`,
        method: "PATCH",
        body: { role }, 
      }),
      invalidatesTags: ["user"],
    }),
  }),
});


export const {useMyBookingsQuery, useAllUserQuery, useUpdateUserRoleMutation} = userManagementApi

export default userManagementApi;
