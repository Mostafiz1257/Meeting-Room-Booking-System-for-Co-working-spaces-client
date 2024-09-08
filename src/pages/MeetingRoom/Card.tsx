import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IRoom } from "../../types/room.type";

interface CardProps {
  room: IRoom;
}

const Card: React.FC<CardProps> = ({ room }) => {
  const { name, image, pricePerSlot, capacity, roomNo } = room;
  const [isHovered, setIsHovered] = useState(false);

  const firstImage = image.length > 0 ? image[0] : '';
  const secondImage = image.length > 1 ? image[1] : firstImage; 
  return (
    <Link 
      to={`/room-details/${room._id}`} 
      className="col-span-1 cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col gap-2 w-full p-4 bg-white border border-gray-200 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          <div className="relative h-full w-full">
            <img
              className={`absolute inset-0 object-cover h-full w-full transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
              src={firstImage}
              alt={name}
            />
            <img
              className={`absolute inset-0 object-cover h-full w-full transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
              src={secondImage}
              alt={name}
            />
          </div>
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
