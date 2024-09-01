import image from '../../assets/img1.jpg'

const OurStorySection = () => {
    return (
        <section className="relative py-16 bg-gray-900 text-white">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={image} // Replace with your background image URL
                    alt="Background"
                    className="w-full h-full object-cover opacity-50"
                />
            </div>

            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-6">
                <h2 className="text-4xl  font-bold mb-12 text-center animate__animated animate__fadeIn">Our Story</h2>
                <div className="bg-white text-gray-900 rounded-lg shadow-lg p-8 md:p-12 relative z-10">
                    <p className="text-lg mb-6 animate__animated animate__fadeIn animate__delay-1s">
                        <span className='text-5xl text-[#003580] font-bold'>T</span> oday our journey began in 20 years with a vision to Our journey began in 2010 with a vision to redefine the customer experience in the service industry. We started with the belief that technology and personalized support could transform how people interact with service providers. Our goal was to create a seamless, user-centric platform that not only simplified the booking process but also enhanced overall satisfaction. From day one, we focused on innovation and customer-centricity, aiming to set new standards in service excellence.. Over the years, our commitment to innovation and excellence has driven us to achieve significant milestones. We have embraced new challenges and evolved continuously, always striving to meet and exceed our customers' expectations.
                    </p>
                    <p className="text-lg mb-6 animate__animated animate__fadeIn animate__delay-2s">
                        Today, we are proud of our achievements and excited about the future. Our mission remains to [Future Goals or Vision]. As we look ahead, we are committed to continuing our tradition of excellence and driving progress in our field.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default OurStorySection;
