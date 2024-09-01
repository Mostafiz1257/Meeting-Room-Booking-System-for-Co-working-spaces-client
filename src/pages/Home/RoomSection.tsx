import { Link } from "react-router-dom";
import Loader from "../../components/shared/Loader";
import { useGetAllRoomsQuery } from "../../redux/features/admin/roomManagement.api";
import Card from "../MeetingRoom/Card";
import { IRoom } from "../../types/room.type";

const RoomSection = () => {
  const { data, isLoading } = useGetAllRoomsQuery({});
  const rooms = data?.data || [];
  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div className="py-4">
      <h2 className="text-4xl py-4 text-center font-bold text-[#003580] mb-8">
        Premium Room Options
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {rooms.slice(0, 5).map((room:IRoom) => (
          <Card key={room._id} room={room}></Card>
        ))}
      </div>
      <div className="flex justify-center">
      <Link to="/meeting-rooms">
        <button className="px-6 py-3 bg-[#003580] hover:bg-[#002b5f] text-white font-semibold rounded-md transition duration-300 my-8">
          See More...
        </button>
      </Link>
      </div>
      
    </div>
  );
};

export default RoomSection;
