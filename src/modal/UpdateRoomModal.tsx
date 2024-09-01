import React, { useState, useEffect } from "react";
import { toast } from "sonner";
import { useUpdateRoomMutation } from "../redux/features/admin/roomManagement.api";

interface Room {
  _id: string;
  name: string;
  roomNo: number;
  floorNo: number;
  capacity: number;
  pricePerSlot: number;
}

interface UpdateRoomModalProps {
  isOpen: boolean;
  onClose: () => void;
  room: Room;
}

const UpdateRoomModal: React.FC<UpdateRoomModalProps> = ({ isOpen, onClose, room }) => {
  const [updateRoom] = useUpdateRoomMutation();
  const [updatedRoomDetails, setUpdatedRoomDetails] = useState<Room>(room);

  useEffect(() => {
    if (room) {
      setUpdatedRoomDetails(room);
    }
  }, [room]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const updatedValue = 
      name === "roomNo" || name === "floorNo" || name === "capacity" || name === "pricePerSlot"
        ? Number(value)
        : value;
    setUpdatedRoomDetails((prevDetails) => ({
      ...prevDetails,
      [name]: updatedValue,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const toastId = toast.loading('Updating Room Info');
    try {
      const { _id, ...updatedData } = updatedRoomDetails;

      const payload = {
        roomId: _id,
        data: updatedData,
      };

      await updateRoom(payload).unwrap();
      toast.success("Room updated successfully!", { id: toastId, duration: 2000 });
      onClose();
    } catch (error) {
      console.error("Error updating room:", error);
      toast.error("Failed to update room", { id: toastId, duration: 2000 });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-[#003580]">Update Room</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Room Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={updatedRoomDetails.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#003580] focus:border-[#003580] sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="roomNo" className="block text-sm font-medium text-gray-700">Room Number</label>
            <input
              type="number"
              id="roomNo"
              name="roomNo"
              value={updatedRoomDetails.roomNo}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#003580] focus:border-[#003580] sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="floorNo" className="block text-sm font-medium text-gray-700">Floor Number</label>
            <input
              type="number"
              id="floorNo"
              name="floorNo"
              value={updatedRoomDetails.floorNo}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#003580] focus:border-[#003580] sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="capacity" className="block text-sm font-medium text-gray-700">Capacity</label>
            <input
              type="number"
              id="capacity"
              name="capacity"
              value={updatedRoomDetails.capacity}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#003580] focus:border-[#003580] sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="pricePerSlot" className="block text-sm font-medium text-gray-700">Price Per Slot</label>
            <input
              type="number"
              id="pricePerSlot"
              name="pricePerSlot"
              value={updatedRoomDetails.pricePerSlot}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#003580] focus:border-[#003580] sm:text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#003580] text-white font-semibold rounded-md shadow-sm hover:bg-[#002a6d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#003580]"
          >
            Update Room
          </button>
        </form>
        <button
          onClick={onClose}
          className="w-full mt-4 py-2 px-4 bg-gray-500 text-white font-semibold rounded-md shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default UpdateRoomModal;
