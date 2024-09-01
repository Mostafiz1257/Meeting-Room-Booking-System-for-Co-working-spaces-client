import { baseApi } from "../../api/baseApi";

const roomManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllRooms: builder.query({
      query: () => ({
        url: "/api/rooms",
        method: "GET",
      }),
      providesTags: ["Room"],
    }),
    addRoom: builder.mutation({
      query: (data) => ({
        url: "api/rooms",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Room"],
    }),
    softDeleteRoom: builder.mutation({
      query: (roomId) => ({
        url: `/api/rooms/${roomId}`,
        method: "DELETE",
        body: { idDeleted: true },
      }),
      invalidatesTags: ["Room"],
    }),
    updateRoom: builder.mutation({
      query: ({ roomId, data }) => ({
        url: `api/rooms/${roomId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Room"],
    }),

    getSingleRoom:builder.query({
      query:(roomId)=>({
        url:`/api/rooms/${roomId}`,
        method:"GET"
      }),
      providesTags: ["Room"],
    }),

    createSlot: builder.mutation({
      query: (data) => ({
        url: "api/slots",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["slot"],
    }),
  }),
});

export const {
  useGetAllRoomsQuery,
  useAddRoomMutation,
  useSoftDeleteRoomMutation,
  useUpdateRoomMutation,
  useCreateSlotMutation,
  useGetSingleRoomQuery
} = roomManagementApi;
export default roomManagementApi;
