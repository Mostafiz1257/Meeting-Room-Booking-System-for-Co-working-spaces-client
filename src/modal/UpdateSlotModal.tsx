import React, { useState } from "react";
import { Slot } from "../types/booking.type";


interface UpdateSlotModalProps {
  slot: Slot;
  isOpen: boolean;
  onClose: () => void;
  onUpdate: (updatedSlot: Slot) => void;
}

const UpdateSlotModal: React.FC<UpdateSlotModalProps> = ({ slot, isOpen, onClose, onUpdate }) => {
  const [date, setDate] = useState<string>(slot.date || "");
  const [startTime, setStartTime] = useState<string>(slot.startTime || "");
  const [endTime, setEndTime] = useState<string>(slot.endTime || "");

  const handleSubmit = () => {
    const updatedSlot: Slot = { ...slot, date, startTime, endTime };
    onUpdate(updatedSlot);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4 text-[#003580]">Update Slot</h2>
        <label className="block mb-2">
          Date:
          <input
            type="date"
            className="border p-2 w-full mt-1 rounded-md shadow-sm focus:outline-none focus:ring-[#003580] focus:border-[#003580]"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <label className="block mb-2">
          Start Time:
          <input
            type="time"
            className="border p-2 w-full mt-1 rounded-md shadow-sm focus:outline-none focus:ring-[#003580] focus:border-[#003580]"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </label>
        <label className="block mb-4">
          End Time:
          <input
            type="time"
            className="border p-2 w-full mt-1 rounded-md shadow-sm focus:outline-none focus:ring-[#003580] focus:border-[#003580]"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </label>
        <div className="flex justify-end">
          <button
            className="bg-gray-300 text-black px-4 py-2 rounded mr-2 hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-[#003580] text-white px-4 py-2 rounded hover:bg-[#001e40]"
            onClick={handleSubmit}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateSlotModal;
