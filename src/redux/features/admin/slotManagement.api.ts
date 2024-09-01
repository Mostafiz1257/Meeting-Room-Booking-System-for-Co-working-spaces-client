import { baseApi } from "../../api/baseApi";

const slotManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allSlots: builder.query({
      query: () => ({
        url: "/api/slots",
        method: "GET",
      }),
      providesTags: ["slot"],
    }),

    getSlotsByRoom: builder.query({
      query: (roomId) => ({
        url: `api/slots/room/${roomId}`,
        method: "GET",
      }),
      providesTags: ["slot"],
    }),
    updateSlot:builder.mutation({
      query:({slotId,data})=>({
        url:`/api/slots/${slotId}`,
        method:"PATCH",
        body:data
      })
    }),
    deleteSlot : builder.mutation({
      query:(slotId)=>({
        url:`/api/slots/${slotId}`,
        method:"DELETE"
      })
    })

  }),
});

export const { useGetSlotsByRoomQuery, useAllSlotsQuery , useUpdateSlotMutation, useDeleteSlotMutation} = slotManagementApi;
export default slotManagementApi;
