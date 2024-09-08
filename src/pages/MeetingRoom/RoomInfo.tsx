import { useState, useEffect } from "react";
import { IRoom } from "../../types/room.type";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface RoomInfoProps {
  room: IRoom;
}

const RoomInfo: React.FC<RoomInfoProps> = ({ room }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = room?.image || [];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 

    return () => clearInterval(interval); 
  }, [images.length]);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <p className="text-3xl py-2 font-extrabold text-[#003580] tracking-wide">
        {room?.name}
      </p>

      <div className="md:flex md:gap-5 md:divide-x-2">
        <p className="text-gray-500 md:pt-1 text-lg">Capacity: {room?.capacity}</p>
        <p className="text-gray-500 md:pl-4 md:pt-1 text-lg">Floor: {room?.floorNo}</p>
        <p className="text-gray-500 md:pl-4 md:pt-1 text-lg">Room: {room?.roomNo}</p>
      </div>

      
      <div className="relative mt-6 w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{
            transform: `translateX(-${currentImageIndex * 100}%)`,
            width: `${images.length * 100}%`,
          }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              className="object-cover w-full h-full"
              src={image}
              alt={`room_image_${index}`}
              style={{ minWidth: "100%", maxWidth: "100%" }} 
            />
          ))}
        </div>

       
        <div
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 p-2 rounded-full cursor-pointer text-white hover:bg-opacity-70 transition-all duration-300"
          onClick={handlePrevClick}
        >
          <FaArrowLeft size={20} />
        </div>
        <div
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 p-2 rounded-full cursor-pointer text-white hover:bg-opacity-70 transition-all duration-300"
          onClick={handleNextClick}
        >
          <FaArrowRight size={20} />
        </div>

        
        <div className="absolute bottom-0 left-0 bg-[#003580] bg-opacity-80 text-white text-xl font-semibold py-2 px-6 rounded-tr-xl shadow-lg">
          ${room?.pricePerSlot}
          <span className="text-sm text-gray-300"> (per slot)</span>
        </div>
      </div>

     
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              currentImageIndex === index
                ? "bg-[#003580] scale-110 shadow-md"
                : "bg-gray-400"
            }`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>

      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        {room?.amenities?.map((amenity, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-4 border rounded-lg bg-[#003580] text-white shadow-lg transition-colors duration-300 hover:bg-[#0056b3] hover:shadow-2xl"
          >
            {amenity}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomInfo;
