import { useState } from "react";
import { toast } from "sonner";
import { useDeleteUserBookingMutation } from "../redux/features/admin/bookingManagement.api";


interface DeleteBookingProps {
  bookingId: string;
  onDeleteSuccess: () => void;
}

const DeleteBooking = ({ bookingId, onDeleteSuccess }: DeleteBookingProps) => {
  const [showModal, setShowModal] = useState(false);
  const [deleteUserBooking] = useDeleteUserBookingMutation();

  const handleDelete = async () => {
    setShowModal(false);
    await deleteUserBooking({ id: bookingId });
    onDeleteSuccess();
    toast.success("Booking deleted successfully", { duration: 2000 });
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="bg-red-600 text-white py-1 px-3 rounded hover:bg-red-700"
      >
        Delete
      </button>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <p>Are you sure you want to delete this booking?</p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-400 text-white py-1 px-3 rounded mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-600 text-white py-1 px-3 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteBooking;
