import React, { useState } from 'react';
import { useCreateSlotMutation, useGetAllRoomsQuery } from "../../../redux/features/admin/roomManagement.api";
import Loader from '../../../components/shared/Loader';
import { toast } from 'sonner';
import { IRoom } from '../../../types/room.type';

const CreateSlot: React.FC = () => {
    const { data, isLoading, isError } = useGetAllRoomsQuery({});
    const [createSlot] = useCreateSlotMutation();
    const [selectedRoom, setSelectedRoom] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const [startTime, setStartTime] = useState<string>('');
    const [endTime, setEndTime] = useState<string>('');


    const rooms: IRoom[] | undefined = data?.data;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (selectedRoom && date && startTime && endTime) {
            try {
                await createSlot({ room: selectedRoom, date, startTime, endTime }).unwrap();
                toast.success("Slot created successfully!");
                setSelectedRoom('');
                setDate('');
                setStartTime('');
                setEndTime('');
            } catch (error) {
                toast.error("Failed to create slot. Please try again.");
            }
        } else {
            toast.warning("Please fill the form");
        }
    };

    if (isLoading) return <Loader />;
    if (isError) return <p className="text-red-500">Error fetching rooms</p>;

    return (
        <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-[#003580] mb-4 text-center">Create a New Slot</h2>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label htmlFor="room" className="block text-gray-700 font-medium mb-2">Room</label>
                        <select
                            id="room"
                            value={selectedRoom}
                            onChange={(e) => setSelectedRoom(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Select a room</option>
                            {rooms?.map((room) => (
                                <option key={room._id} value={room._id}>
                                    {room.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="date" className="block text-gray-700 font-medium mb-2">Date</label>
                        <input
                            type="date"
                            id="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
                    <div>
                        <label htmlFor="startTime" className="block text-gray-700 font-medium mb-2">Start Time</label>
                        <input
                            type="time"
                            id="startTime"
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="endTime" className="block text-gray-700 font-medium mb-2">End Time</label>
                        <input
                            type="time"
                            id="endTime"
                            value={endTime}
                            onChange={(e) => setEndTime(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full bg-[#003580] text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
                >
                    Create Slot
                </button>
            </form>
        </div>
    );
};

export default CreateSlot;
