import { toast } from "sonner";
import Loader from "../../../components/shared/Loader";
import {
  useGetAllBookingsQuery,
  useRejectBookingMutation,
} from "../../../redux/features/admin/bookingManagement.api";
import { useState, useEffect } from "react";
import DeleteBooking from "../../../modal/DeleteBooking";


interface Slot {
  _id: string;
  startTime: string;
  endTime: string;
  isBooked: boolean;
}

interface Booking {
  _id: string;
  room: {
    name: string;
  };
  user: {
    name: string;
  };
  date: string;
  isConfirmed: "confirm" | "unconfirm";
  isDeleted: boolean;
  slots: Slot[];
}

const AllBookings = () => {
  const { data, isLoading, refetch } = useGetAllBookingsQuery({});
  const [rejectBooking] = useRejectBookingMutation();
  const [allBookings, setAllBookings] = useState<Booking[]>([]);

  useEffect(() => {
    if (data) {
      setAllBookings(
        data.data.filter((booking: Booking) => !booking.isDeleted)
      );
    }
  }, [data]);

  const handleReject = async (bookedSlotId: string | undefined) => {
    if (bookedSlotId) {
      const toastId = toast.loading("Rejecting booking");
      await rejectBooking({ id: bookedSlotId });
      refetch();
      toast.success("Rejected the booking", { id: toastId, duration: 2000 });
    }
  };

  const handleDeleteSuccess = () => {
    refetch();
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-[#003580] text-white">
            <th className="p-2 border">Room Name</th>
            <th className="p-2 border">User Name</th>
            <th className="p-2 border">Date</th>
            <th className="p-2 border">Time</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Reject</th>
            <th className="p-2 border">Delete</th>
          </tr>
        </thead>
        <tbody>
          {allBookings.map((booking) => {
            const isConfirmed = booking.isConfirmed === "confirm";
            const isBooked = booking.slots.some((slot) => slot.isBooked);
            const unBooked = booking.slots.some((slot) => !slot.isBooked);
            const bookedSlotId = booking.slots.find(
              (slot) => slot.isBooked
            )?._id;

            return (
              <tr
                key={booking._id}
                className="bg-gray-100 border-b hover:bg-gray-200"
              >
                <td className="p-2 border">{booking.room.name}</td>
                <td className="p-2 border">{booking.user.name}</td>
                <td className="p-2 border">{booking.date}</td>
                <td className="p-2 border">
                  {booking.slots[0]?.startTime} - {booking.slots[0]?.endTime}
                </td>
                <td className="p-2 border">
                  {isConfirmed ? (
                    <span className="text-green-600">Confirmed</span>
                  ) : (
                    <span className="text-yellow-600">Pending</span>
                  )}
                </td>
                <td className="p-2 border text-center">
                  {isConfirmed ? (
                    <button
                      disabled
                      className="bg-gray-400 text-white py-1 px-3 rounded cursor-not-allowed"
                    >
                      Can't Reject
                    </button>
                  ) : unBooked ? (
                    <button
                      disabled
                      className="bg-gray-400 text-white py-1 px-3 rounded cursor-not-allowed"
                    >
                      Already Unbooked
                    </button>
                  ) : (
                    <button
                      onClick={() => handleReject(bookedSlotId)}
                      className="bg-red-600 text-white py-1 px-3 rounded hover:bg-red-700"
                    >
                      Reject Booking
                    </button>
                  )}
                </td>
                <td className="p-2 border text-center">
                  {isConfirmed || isBooked ? (
                    <button
                      disabled
                      className="bg-gray-400 text-white py-1 px-3 rounded cursor-not-allowed"
                    >
                      Can't Delete
                    </button>
                  ) : (
                    <DeleteBooking
                      bookingId={booking._id}
                      onDeleteSuccess={handleDeleteSuccess}
                    />
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllBookings;
