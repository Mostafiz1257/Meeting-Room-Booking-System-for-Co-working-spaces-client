import { baseApi } from "../../api/baseApi";

const bookingManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBookings: builder.query({
      query: () => ({
        url: "/api/bookings",
        method: "GET",
      }),
    }),
    rejectBooking: builder.mutation({
      query: ({id}) => ({
        url: `/api/reject-booking/${id}`,
        method:"PATCH",
        body:{isBooked:false}
      }),
    }),
    deleteUserBooking: builder.mutation({
      query: ({id}) => ({
        url: `/api/delete-userBooking/${id}`,
        method:"PATCH",
      }),
    }),
    
  }),
});

export const { useGetAllBookingsQuery, useRejectBookingMutation ,useDeleteUserBookingMutation} = bookingManagementApi;
export default bookingManagementApi;
