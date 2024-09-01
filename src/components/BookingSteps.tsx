import { FaDoorOpen, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';

const BookingSteps = () => {
    return (
        <div className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-[#003580] mb-8">Easy Booking Steps</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
            
                    <div className="p-8 bg-white shadow-lg rounded-lg flex flex-col items-center">
                        <div className="mb-4">
                            <FaDoorOpen className="text-[#003580] w-16 h-16" />
                        </div>
                        <h3 className="text-2xl font-semibold text-[#003580] mb-4">Select a Room</h3>
                        <p>Browse through our available rooms and choose the one that best suits your needs.</p>
                    </div>
                    
                
                    <div className="p-8 bg-white shadow-lg rounded-lg flex flex-col items-center">
                        <div className="mb-4">
                            <FaCalendarAlt className="text-[#003580] w-16 h-16" />
                        </div>
                        <h3 className="text-2xl font-semibold text-[#003580] mb-4">Choose Date & Time</h3>
                        <p>Select your preferred date and time to check room availability and finalize your booking.</p>
                    </div>
                    
                  
                    <div className="p-8 bg-white shadow-lg rounded-lg flex flex-col items-center">
                        <div className="mb-4">
                            <FaCheckCircle className="text-[#003580] w-16 h-16" />
                        </div>
                        <h3 className="text-2xl font-semibold text-[#003580] mb-4">Confirm Booking</h3>
                        <p>Review your choices and confirm your booking to receive instant confirmation.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingSteps;
