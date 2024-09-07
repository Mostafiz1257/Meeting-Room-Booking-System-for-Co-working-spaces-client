import { useState } from "react";
import Loader from "../../components/shared/Loader";
import { useGetAllRoomsQuery } from "../../redux/features/admin/roomManagement.api";
import { IRoom } from "../../types/room.type";
import Card from "./Card";

const MeetingRoom: React.FC = () => {
  const { data, isLoading } = useGetAllRoomsQuery({});
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [capacityFilter, setCapacityFilter] = useState<string>("");
  const [priceFilter, setPriceFilter] = useState<string>("");
  const [sortOption, setSortOption] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const rooms: IRoom[] = data?.data || [];
  
  const itemsPerPage = 10;
  const totalPages = Math.ceil(rooms.length / itemsPerPage);

  if (isLoading) {
    return <Loader />;
  }

  const filteredRooms = rooms
    .filter((room) =>
      room.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (capacityFilter === "" || room.capacity === Number(capacityFilter)) &&
      (priceFilter === "" || room.pricePerSlot <= Number(priceFilter))
    );

  const sortedRooms = filteredRooms.sort((a, b) => {
    if (sortOption === "priceAsc") {
      return a.pricePerSlot - b.pricePerSlot;
    }
    if (sortOption === "priceDesc") {
      return b.pricePerSlot - a.pricePerSlot;
    }
    return 0;
  });

  const paginatedRooms = sortedRooms.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const clearFilters = () => {
    setSearchQuery("");
    setCapacityFilter("");
    setPriceFilter("");
    setSortOption("");
    setCurrentPage(1); 
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="my-8 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 bg-white p-4 shadow-md rounded-lg">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Search by room name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:w-auto p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003580]"
          />
          <input
            type="number"
            placeholder="Filter by capacity"
            value={capacityFilter}
            onChange={(e) => setCapacityFilter(e.target.value)}
            className="w-full sm:w-auto p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003580]"
          />
          <input
            type="number"
            placeholder="Filter by price"
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
            className="w-full sm:w-auto p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003580]"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="w-full sm:w-auto p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003580]"
          >
            <option value="">Sort by Price</option>
            <option value="priceAsc">Price: Low to High</option>
            <option value="priceDesc">Price: High to Low</option>
          </select>
          <button
            onClick={clearFilters}
            className="w-full sm:w-auto p-2 bg-[#003580] text-white rounded-md hover:bg-[#084dad] focus:outline-none focus:ring-2 focus:ring-red-600"
          >
            Clear Filters
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {paginatedRooms.map((room) => (
          <Card key={room._id} room={room} />
        ))}
      </div>

      <div className="flex justify-center items-center mt-8">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-2 bg-[#003580] text-white rounded-md hover:bg-[#084dad] disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <span className="mx-4">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 mx-2 bg-[#003580] text-white rounded-md hover:bg-[#084dad] disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MeetingRoom;
