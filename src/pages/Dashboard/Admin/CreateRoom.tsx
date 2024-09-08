import { useState } from "react";
import { useAddRoomMutation } from "../../../redux/features/admin/roomManagement.api";
import { toast } from "sonner";

const CreateRoom = () => {
  const [addRoom] = useAddRoomMutation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [roomDetails, setRoomDetails] = useState({
    name: "",
    roomNo: "",
    floorNo: "",
    capacity: "",
    pricePerSlot: "",
    amenities: "",
    image: [], // Changed to array to store multiple image URLs
  });
  const [imageFiles, setImageFiles] = useState<File[]>([]); // Changed to array to handle multiple files

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setRoomDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setImageFiles(Array.from(files)); // Convert FileList to array
    }
  };

  const uploadImages = async (): Promise<string[]> => {
    const uploadedImageUrls: string[] = [];

    for (const file of imageFiles) {
      const formData = new FormData();
      formData.append("image", file);

      try {
        const response = await fetch(
          `https://api.imgbb.com/1/upload?key=63e5e5d08878e2104d3082bebc10b603`,
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await response.json();
        uploadedImageUrls.push(data.data.url);
      } catch (error) {
        console.error("Error uploading image:", error);
        toast.error("Failed to upload images");
        setIsSubmitting(false);
      }
    }
    return uploadedImageUrls;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const toastId = toast.loading("Uploading new room");
    setIsSubmitting(true);
    const imageUrls = await uploadImages();
    if (imageUrls.length === 0) return;

    const formattedAmenities = roomDetails.amenities
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item.length > 0);

    const formattedRoomDetails = {
      ...roomDetails,
      roomNo: Number(roomDetails.roomNo),
      floorNo: Number(roomDetails.floorNo),
      capacity: Number(roomDetails.capacity),
      pricePerSlot: Number(roomDetails.pricePerSlot),
      amenities: formattedAmenities,
      image: imageUrls, // Store the array of image URLs
    };

    try {
      await addRoom(formattedRoomDetails).unwrap();
      toast.success("New room added", { id: toastId, duration: 2000 });
      setRoomDetails({
        name: "",
        roomNo: "",
        floorNo: "",
        capacity: "",
        pricePerSlot: "",
        amenities: "",
        image: [],
      });
      setImageFiles([]);
      setIsSubmitting(false);
    } catch (error) {
      console.error("Error adding room:", error);
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-6 text-[#003580]">
          Create a New Room
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Room Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={roomDetails.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#003580] focus:border-[#003580] sm:text-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="roomNo"
                className="block text-sm font-medium text-gray-700"
              >
                Room Number
              </label>
              <input
                type="number"
                id="roomNo"
                name="roomNo"
                value={roomDetails.roomNo}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#003580] focus:border-[#003580] sm:text-sm"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label
                htmlFor="floorNo"
                className="block text-sm font-medium text-gray-700"
              >
                Floor Number
              </label>
              <input
                type="number"
                id="floorNo"
                name="floorNo"
                value={roomDetails.floorNo}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#003580] focus:border-[#003580] sm:text-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="capacity"
                className="block text-sm font-medium text-gray-700"
              >
                Capacity
              </label>
              <input
                type="number"
                id="capacity"
                name="capacity"
                value={roomDetails.capacity}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#003580] focus:border-[#003580] sm:text-sm"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label
                htmlFor="pricePerSlot"
                className="block text-sm font-medium text-gray-700"
              >
                Price per Slot
              </label>
              <input
                type="number"
                id="pricePerSlot"
                name="pricePerSlot"
                value={roomDetails.pricePerSlot}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#003580] focus:border-[#003580] sm:text-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700"
              >
                Upload Images
              </label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleImageChange}
                multiple // Allow multiple file uploads
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#003580] focus:border-[#003580] sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="amenities"
              className="block text-sm font-medium text-gray-700"
            >
              Amenities (comma-separated)
            </label>
            <textarea
              id="amenities"
              name="amenities"
              value={roomDetails.amenities}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#003580] focus:border-[#003580] sm:text-sm"
              rows={4}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#003580] text-white font-semibold rounded-md shadow-sm hover:bg-[#002a6d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#003580]"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Adding..." : "Add Room"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateRoom;
