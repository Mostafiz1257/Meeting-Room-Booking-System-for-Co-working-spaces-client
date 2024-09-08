const WhyChooseUs = () => {
    return (
        <div className="py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-[#003580] mb-8">Why Choose Us?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    <div className="p-8 bg-gray-100 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                        <h3 className="text-2xl font-semibold text-[#003580] mb-4">Seamless Booking Experience</h3>
                        <p>Our platform is designed to provide a smooth and hassle-free booking process, ensuring you can secure your desired services with just a few clicks.</p>
                    </div>
                    
                    <div className="p-8 bg-gray-100 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                        <h3 className="text-2xl font-semibold text-[#003580] mb-4">Secure Transactions</h3>
                        <p>We prioritize your security, offering encrypted transactions that protect your personal and payment information at all times.</p>
                    </div>
                    
                    <div className="p-8 bg-gray-100 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                        <h3 className="text-2xl font-semibold text-[#003580] mb-4">Trusted by Thousands</h3>
                        <p>Join a growing community of satisfied customers who trust our services for their reliability and quality.</p>
                    </div>
                    
                    <div className="p-8 bg-gray-100 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                        <h3 className="text-2xl font-semibold text-[#003580] mb-4">Personalized Support</h3>
                        <p>Our dedicated support team is here to provide personalized assistance, ensuring your experience with us is as smooth as possible.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
