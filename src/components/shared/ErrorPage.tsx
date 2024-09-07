import { FaExclamationTriangle } from 'react-icons/fa';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <FaExclamationTriangle size={80} className="text-yellow-500 mb-4 sm:mb-6" />
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 text-center">
        Oops! Something went wrong
      </h1>
      <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 text-center">
        We encountered an unexpected error. Please try again later.
      </p>
      <button
        onClick={() => window.location.href = '/'}
        className="bg-[#003580] text-white py-2 px-4 sm:py-3 sm:px-6 rounded hover:bg-[#001e40] transition duration-200"
      >
        Go Back to Homepage
      </button>
    </div>
  );
};

export default ErrorPage;
