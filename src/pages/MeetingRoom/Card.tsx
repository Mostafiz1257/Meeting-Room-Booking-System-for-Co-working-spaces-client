import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IRoom } from "../../types/room.type";

interface CardProps {
  room: IRoom;
}


const  Card: React.FC<CardProps> = ({ room }) => {
  const { name, image, pricePerSlot, capacity, roomNo } = room;

  return (
    <Link to={`/room-details/${room._id}`} className="col-span-1 cursor-pointer group">
      <div className="flex flex-col gap-2 w-full p-4 bg-white border border-gray-200 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          <img
            className="object-cover h-full w-full transition-transform duration-300 group-hover:scale-110"
            src={image}
            alt={name}
          />
          <div className="absolute top-3 right-3 text-white bg-black bg-opacity-60 p-1 rounded-full">
            <IoMdInformationCircleOutline size={24} />
          </div>
        </div>
        <div className="font-semibold text-lg truncate">{name}</div>
        <div className="font-light text-neutral-500 text-sm">
          Room No: {roomNo}
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="font-semibold text-xl">$ {pricePerSlot}</div>
          <div className="font-light text-sm">Capacity: {capacity}</div>
        </div>
        <div className="mt-2 flex justify-end">
          <button className="flex items-center text-[#003580] hover:underline">
            <span className="mr-1">Schedule </span>
            <FaArrowRight size={16} />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Card;
