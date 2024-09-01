
import { FaExclamationTriangle } from 'react-icons/fa';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <FaExclamationTriangle size={100} className="text-yellow-500 mb-4" />
      <h1 className="text-4xl font-bold mb-2">Oops! Something went wrong</h1>
      <p className="text-lg text-gray-700 mb-6">
        We encountered an unexpected error. Please try again later.
      </p>
      <button
        onClick={() => window.location.href = '/'}
        className="bg-[#003580] text-white py-2 px-4 rounded hover:bg-[#001e40] transition duration-200"
      >
        Go Back to Homepage
      </button>
    </div>
  );
};

export default ErrorPage;
