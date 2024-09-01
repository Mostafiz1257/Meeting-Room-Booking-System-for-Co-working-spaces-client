
import { FaCheckCircle } from 'react-icons/fa';

const PaymentSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <FaCheckCircle size={100} className="text-green-500 mb-4" />
      <h1 className="text-4xl font-bold mb-2">Thank You!</h1>
      <p className="text-lg text-gray-700 mb-6">
        Your payment was successful. We appreciate your purchase.
      </p>
      <button
        onClick={() => window.location.href = '/'}
        className="bg-[#003580] text-white py-2 px-4 rounded hover:bg-[#001e40] transition duration-200"
      >
        Go Home
      </button>
    </div>
  );
};

export default PaymentSuccess;
