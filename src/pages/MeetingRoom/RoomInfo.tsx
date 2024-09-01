import { IRoom } from "../../types/room.type";

interface RoomInfoProps {
  room: IRoom;
}

const RoomInfo: React.FC<RoomInfoProps> = ({ room }) => {
  return (
    <div>
      <p className="text-3xl py-2 font-extrabold text-[#003580] tracking-wide">
        {room?.name}
      </p>

      <div className="md:flex md:gap-5 md:divide-x-2">
        <p className="text-gray-500 md:pt-1 text-lg">
          Capacity: {room?.capacity}
        </p>
        <p className="text-gray-500 md:pl-4 md:pt-1 text-lg">
          Floor: {room?.floorNo}
        </p>
        <p className="text-gray-500 md:pl-4 md:pt-1 text-lg">
          Room: {room?.roomNo}
        </p>
      </div>
      <div className="relative mt-4">
        <img
          className="object-cover h-[350px] rounded-xl w-full shadow-lg"
          src={room?.image}
          alt="place_pic"
        />
        <div className="absolute bottom-0 left-0 bg-[#003580] text-white text-xl font-semibold py-2 px-4 rounded-tr-xl">
          ${room?.pricePerSlot}
          <span className="text-sm text-gray-200"> (per slot)</span>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {room?.amenities?.map((amenity, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-4 border rounded-lg bg-[#003580] border-[#003580] text-white shadow-md transition-colors duration-300 hover:bg-[#0056b3] hover:shadow-lg"
          >
            {amenity}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomInfo;
