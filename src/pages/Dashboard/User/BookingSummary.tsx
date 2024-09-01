import { useLocation, useNavigate } from "react-router-dom";
import Container from "../../../components/shared/Container";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const BookingSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { booking, user } = location.state || {};
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (!booking || !user) {
      navigate("/my-bookings");
    }
  }, [booking, user, navigate]);

  if (!booking || !user) {
    return null;
  }

  const handlePayment = async () => {
    try {
      setIsProcessing(true); 

      const stripe = await loadStripe(
        "pk_test_51NFUAjEsme57IV63aYt8tpTvOke8ZxsEw3eN2XiuTYopgXp8kRQ3c3thJoWrzG01vFDyq0vqJ9C4cpFRAl2vlfZY006wDbD92L"
      );

      const response = await fetch(
        "https://meeting-room-booking-system-liart.vercel.app/api/create-checkout-session",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ bookingInfo: booking }),
        }
      );

      const session = await response.json();
      const updatedBookingInfo = {
        ...booking,
        transactionId: session?.id,
      };

      const result = await stripe?.redirectToCheckout({
        sessionId: session?.id,
      });

      if (result?.error) {
        console.error("Error redirecting to checkout:", result.error.message);
        setIsProcessing(false); 
      } else {
        navigate("/success", { state: { booking: updatedBookingInfo, user } });
      }
    } catch (error) {
      console.error("Error during payment processing:", error);
      setIsProcessing(false);
    }
  };

  return (
    <Container>
      <div className="mt-8 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-6 text-[#003580]">
          Booking Summary
        </h2>
        <div className="mb-4">
          <h3 className="text-xl font-medium">Room Details:</h3>
          <p>
            <strong>Room Name:</strong> {booking.room.name}
          </p>
          <p>
            <strong>Date:</strong> {booking.date}
          </p>
          <p>
            <strong>Time:</strong> {booking.slots[0].startTime} -{" "}
            {booking.slots[0].endTime}
          </p>
          <p>
            <strong>Cost:</strong> ${booking.room.pricePerSlot}
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-medium">User Information:</h3>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Address:</strong> {user.address}
          </p>
        </div>
        <div className="mt-6">
          <button
            className="bg-[#003580] text-white py-3 px-6 rounded hover:bg-[#001e40] disabled:bg-gray-400 disabled:cursor-not-allowed"
            onClick={handlePayment}
            disabled={isProcessing} 
          >
            {isProcessing ? "Processing..." : "Proceed to Payment"}
          </button>
        </div>
      </div>
    </Container>
  );
};

export default BookingSummary;
