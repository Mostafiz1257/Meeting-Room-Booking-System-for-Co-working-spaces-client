const ServiceAdvertisement = () => {
    return (
        <div className="py-16 bg-gray-100">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-[#003580] mb-8">Our Premium Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="p-8 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
                        <h3 className="text-2xl font-semibold text-[#003580] mb-4">Real-Time Availability</h3>
                        <p>Check our service availability in real-time and plan your bookings accordingly without any hassle.</p>
                    </div>
                    
                    <div className="p-8 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
                        <h3 className="text-2xl font-semibold text-[#003580] mb-4">Instant Booking Confirmation</h3>
                        <p>Receive instant confirmation of your bookings with no waiting period, ensuring peace of mind.</p>
                    </div>
                    
                    <div className="p-8 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
                        <h3 className="text-2xl font-semibold text-[#003580] mb-4">Flexible Scheduling</h3>
                        <p>Choose the timing that works best for you with our flexible scheduling options.</p>
                    </div>
                    
                    <div className="p-8 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
                        <h3 className="text-2xl font-semibold text-[#003580] mb-4">24/7 Support</h3>
                        <p>Our support team is available around the clock to assist you with any inquiries or issues.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceAdvertisement;
