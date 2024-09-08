import { useState } from "react";
import Container from "../../../components/shared/Container";
import EmptyState from "../../../components/shared/EmptyState";
import Loader from "../../../components/shared/Loader";
import { useMyBookingsQuery } from "../../../redux/features/admin/userManagement.api";
import { currentUser } from "../../../redux/features/auth/authSlice";
import { useAppSelector } from "../../../redux/hooks";
import { useNavigate } from "react-router-dom";
import { Booking } from "../../../types/booking.type";

const MyBookings = () => {
  const { data, isLoading } = useMyBookingsQuery({});
  const user = useAppSelector(currentUser);
  const navigate = useNavigate();
  const [completedBookings, setCompletedBookings] = useState<string[]>([]);

  if (isLoading) {
    return <Loader />;
  }

  const handleCheckout = async (booking: Booking) => {
    navigate(`/booking-summary`, { state: { booking, user } });
    setCompletedBookings([...completedBookings, booking._id]);
  };

  return (
    <div className="mt-8">
      <Container>
        {data?.data?.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg">
              <thead>
                <tr className="bg-[#003580] text-white">
                  <th className="py-3 px-6 text-left">Room Name</th>
                  <th className="py-3 px-6 text-left">Date</th>
                  <th className="py-3 px-6 text-left">Time</th>
                  <th className="py-3 px-6 text-left">Status</th>
                  <th className="py-3 px-6 text-left">Checkout</th>
                </tr>
              </thead>
              <tbody>
                {data.data.map((booking: Booking) => (
                  <tr
                    key={booking._id}
                    className="border-b transition duration-300 ease-in-out hover:bg-[#d4e2f4]"
                  >
                    <td className="py-4 px-6 border-r">
                      {booking?.room?.name}
                    </td>
                    <td className="py-4 px-6 border-r">{booking?.date}</td>
                    <td className="py-4 px-6 border-r">
                      {booking.slots[0]?.startTime} -{" "}
                      {booking.slots[0]?.endTime}
                    </td>
                    <td
                      className={`py-4 px-6 border-r ${
                        booking.isConfirmed === "unconfirmed"
                          ? "text-red-500"
                          : "text-green-500"
                      }`}
                    >
                      {booking.isConfirmed === "unconfirmed"
                        ? "Unconfirmed"
                        : "Confirmed"}
                    </td>
                    <td className="py-4 px-6">
                      <button
                        className={`py-2 px-4 rounded ${
                          completedBookings.includes(booking._id) ||
                          booking.isConfirmed !== "unconfirmed"
                            ? "bg-gray-400"
                            : "bg-[#003580] hover:bg-[#001e40] text-white"
                        }`}
                        onClick={() => handleCheckout(booking)}
                        disabled={booking.isConfirmed !== "unconfirmed"}
                      >
                        {completedBookings.includes(booking._id) ||
                        booking.isConfirmed !== "unconfirmed"
                          ? "Payment Complete"
                          : "Checkout"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <EmptyState message={"You have not booked a slot"} />
        )}
      </Container>
    </div>
  );
};

export default MyBookings;
