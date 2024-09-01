import { useState } from "react";
import Loader from "../../../components/shared/Loader";
import {
  useGetAllRoomsQuery,
  useSoftDeleteRoomMutation,
} from "../../../redux/features/admin/roomManagement.api";
import ConfirmationModal from "../../../modal/ConfirmationModal";
import { toast } from "sonner";
import UpdateRoomModal from "../../../modal/UpdateRoomModal";


interface Room {
  _id: string;
  name: string;
  roomNo: number;
  floorNo: number;
  capacity: number;
  pricePerSlot: number;
}

const GetRooms: React.FC = () => {
  const { data, isLoading } = useGetAllRoomsQuery({});
  const [softDeleteRoom] = useSoftDeleteRoomMutation();
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState<boolean>(false);
  const [roomToUpdate, setRoomToUpdate] = useState<Room | null>(null);
  const [roomIdToDelete, setRoomIdToDelete] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Type for rooms
  const rooms: Room[] | undefined = data?.data;

  if (isLoading) {
    return <Loader />;
  }

  const handleUpdate = (room: Room) => {
    setRoomToUpdate(room);
    setIsUpdateModalOpen(true);
  };

  const handleDelete = (id: string) => {
    setRoomIdToDelete(id);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    const toastId = toast.loading("Deleting successfully");
    if (roomIdToDelete) {
      try {
        await softDeleteRoom(roomIdToDelete).unwrap();
        toast.success("Room deleted successfully", { id: toastId, duration: 2000 });
      } catch (error) {
        console.error("Error deleting room:", error);
        toast.error("Something went wrong", { id: toastId, duration: 2000 });
      }
    }
    setIsModalOpen(false);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead className="bg-[#003580] text-white">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
              Room Name
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
              Room No.
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
              Floor No.
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
              Capacity
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
              Price Per Slot
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {rooms?.map((room: Room) => (
            <tr
              key={room._id}
              className="border-b transition duration-300 ease-in-out hover:bg-[#d4e2f4]"
            >
              <td className="px-6 py-4 text-sm font-medium text-gray-900">
                {room.name}
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">{room.roomNo}</td>
              <td className="px-6 py-4 text-sm text-gray-500">{room.floorNo}</td>
              <td className="px-6 py-4 text-sm text-gray-500">{room.capacity}</td>
              <td className="px-6 py-4 text-sm text-gray-500">$ {room.pricePerSlot}</td>
              <td className="px-6 py-4 text-sm font-medium">
                <button
                  onClick={() => handleUpdate(room)}
                  className="text-[#003580] hover:text-white border border-[#003580] hover:bg-[#003580] px-4 py-2 rounded mr-4 transition duration-300"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(room._id)}
                  className="text-red-600 pl-2 hover:text-white border border-red-600 hover:bg-red-600 px-4 py-2 rounded transition duration-300"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isUpdateModalOpen && (
        <UpdateRoomModal
          isOpen={isUpdateModalOpen}
          onClose={() => setIsUpdateModalOpen(false)}
          room={roomToUpdate!}
        />
      )}
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmDelete}
        message="Are you sure you want to delete this room?"
      />
    </div>
  );
};

export default GetRooms;
