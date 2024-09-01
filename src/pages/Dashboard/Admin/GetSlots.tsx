import  { useState } from "react";
import Loader from "../../../components/shared/Loader";
import {
  useAllSlotsQuery,
  useUpdateSlotMutation,
  useDeleteSlotMutation,
} from "../../../redux/features/admin/slotManagement.api";
import UpdateSlotModal from "../../../modal/UpdateSlotModal";
import { toast } from "sonner";
import DeleteSlotModal from "../../../modal/DeleteSlotModal";


 interface Slot {
  _id: string;
  date: string;
  startTime: string;
  endTime: string;
  isBooked?: boolean; 
  room?:{
    name?:string;
    roomNo?:string
  }
}




const GetSlots = () => {
  const { data: slotData, isLoading, refetch } = useAllSlotsQuery({});
  const [updateSlot] = useUpdateSlotMutation();
  const [deleteSlot] = useDeleteSlotMutation();
  const [selectedSlot, setSelectedSlot] = useState<Slot | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [slotToDelete, setSlotToDelete] = useState<string | null>(null);

  const slots = slotData?.data;
  
  if (isLoading) {
    return <Loader />;
  }

  const handleUpdate = (slot: Slot) => {
    setSelectedSlot(slot);
    setIsModalOpen(true);
  };

  const handleUpdateSubmit = async (updatedSlot: Slot) => {
    const slotId = updatedSlot._id;
    const data = {
      date: updatedSlot.date,
      startTime: updatedSlot.startTime,
      endTime: updatedSlot.endTime,
    };

    try {
      await updateSlot({ slotId, data }).unwrap();
      toast.success("Slot updated successfully!");
      setIsModalOpen(false);
      refetch();
    } catch (error) {
      toast.error("Failed to update slot. Please try again.");
    }
  };

  const handleDelete = (slotId: string) => {
    setSlotToDelete(slotId);
    setIsConfirmModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (slotToDelete) {
      try {
        await deleteSlot(slotToDelete).unwrap();
        toast.success("Slot deleted successfully!");
        setIsConfirmModalOpen(false);
        refetch();
      } catch (error) {
        toast.error("Failed to delete slot. Please try again.");
      }
    }
  };

  return (
    <div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-[#003580] text-white">
            <th className="border p-2">Room Name</th>
            <th className="border p-2">Room No.</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Start Time</th>
            <th className="border p-2">End Time</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {slots?.map((slot: Slot) => (
            <tr key={slot._id} className="hover:bg-[#d4e2f4]">
              <td className="border p-2">{slot.room?.name}</td>
              <td className="border p-2">{slot.room?.roomNo}</td>
              <td className="border p-2">{slot.date}</td>
              <td className="border p-2">{slot.startTime}</td>
              <td className="border p-2">{slot.endTime}</td>
              <td className="border p-2">
                <button
                  className="bg-[#003580] text-white px-4 py-1 rounded mr-2 hover:bg-[#001e40]"
                  onClick={() => handleUpdate(slot)}
                >
                  Update
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-700"
                  onClick={() => handleDelete(slot._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Update Slot Modal */}
      {selectedSlot && (
        <UpdateSlotModal
          slot={selectedSlot}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onUpdate={handleUpdateSubmit}
        />
      )}

      {/* Confirmation Modal */}
      <DeleteSlotModal
        isOpen={isConfirmModalOpen}
        onClose={() => setIsConfirmModalOpen(false)}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default GetSlots;
