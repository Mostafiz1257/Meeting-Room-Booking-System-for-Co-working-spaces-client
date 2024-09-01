import { baseApi } from "../../../api/baseApi";

const bookingManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addBooking: builder.mutation({
        query: (data) => ({
          url: "api/bookings",
          method: "POST",
          body: data,
        }),
        invalidatesTags: ["slot"],
      }),
  }),
});

export const {useAddBookingMutation} = bookingManagementApi
export default bookingManagementApi