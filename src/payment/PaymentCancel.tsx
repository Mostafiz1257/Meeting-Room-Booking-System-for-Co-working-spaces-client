
import { FaTimesCircle } from 'react-icons/fa';

const PaymentCancel = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <FaTimesCircle size={100} className="text-red-500 mb-4" />
      <h1 className="text-4xl font-bold mb-2">Payment Canceled</h1>
      <p className="text-lg text-gray-700 mb-6">
        Your payment process was canceled. No charges were made.
      </p>
      <button
        onClick={() => window.location.href = '/'}
        className="bg-[#003580] text-white py-2 px-4 rounded hover:bg-[#001e40] transition duration-200"
      >
        Return to Homepage
      </button>
    </div>
  );
};

export default PaymentCancel;
