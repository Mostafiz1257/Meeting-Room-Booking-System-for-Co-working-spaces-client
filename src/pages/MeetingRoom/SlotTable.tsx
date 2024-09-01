import { toast } from "sonner";
import { useAddBookingMutation } from "../../redux/features/admin/user/bookingManagement.api";
import { useAppSelector } from "../../redux/hooks";
import { currentUser } from "../../redux/features/auth/authSlice";
import EmptyState from "../../components/shared/EmptyState";
import { IRoom } from "../../types/room.type";
import { Slot } from "../../types/booking.type";

interface SlotTableProps {
  slots: Slot[];
  room: IRoom;
}

const SlotTable: React.FC<SlotTableProps> = ({ slots, room }) => {
  const [addBooking, { isLoading }] = useAddBookingMutation();
  const user = useAppSelector(currentUser);
  const roomId = room?._id;

  const handleBooking = async (slotId: string) => {
    const toastId = toast.loading("Booking...");
    try {
      const bookingData = {
        date: new Date().toISOString().split("T")[0],
        slots: [slotId],
        room: roomId,
        user: user!._id,
      };
      await addBooking(bookingData);
      toast.success("Booking successful", { id: toastId, duration: 2000 });
    
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };

  const isAdmin = user?.role === "admin";
  const availableSlots = slots.filter(slot => !slot.isBooked);
console.log(isAdmin); //true
  return (
    <div className="overflow-x-auto py-8">
      {availableSlots.length > 0 ? (
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-[#003580] text-white">
              <th className="py-3 px-6 text-left">Date</th>
              <th className="py-3 px-6 text-left">Start Time</th>
              <th className="py-3 px-6 text-left">End Time</th>
              <th className="py-3 px-6 text-left">Action</th>
              
            </tr>
          </thead>
          <tbody>
            {availableSlots.map((slot) => (
              <tr
                key={slot._id}
                className={`border-b transition duration-300 ease-in-out hover:bg-[#d4e2f4]`}
              >
                <td className="py-4 px-6 border-r">{slot.date}</td>
                <td className="py-4 px-6 border-r">{slot.startTime}</td>
                <td className="py-4 px-6 border-r">{slot.endTime}</td>
                <td  className="py-4 px-6">
                  
                    <button
                      onClick={() => handleBooking(slot._id)}
                    disabled={isAdmin || isLoading} className="bg-[#003580] text-white px-4 py-2 rounded-lg hover:bg-[#0347a5]">
                    {isLoading ? "Booking.." : "Book Now"}
                    </button>
                </td>
              </tr>
            ))}
          </tbody>
        
        </table>
      ) : (
        <EmptyState message={"No available slot right now"} />
      )}
    </div>
  );
};

export default SlotTable;
