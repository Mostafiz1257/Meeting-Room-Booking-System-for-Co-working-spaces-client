
import 'animate.css'; 
import { Link } from 'react-router-dom';

const OurMissionSection = () => {
    return (
        <section className="relative py-16 bg-gradient-to-r from-[#003580] to-[#00bfff] text-white">
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black opacity-30"></div>
            
            <div className="relative max-w-7xl mx-auto px-6">
                {/* Heading */}
                <div className="text-center mb-12 relative z-10">
                    <h2 className="text-4xl font-bold mb-6 animate__animated animate__fadeIn">Our Mission</h2>
                    <p className="text-lg mb-8 animate__animated animate__fadeIn animate__delay-1s">
                        Our mission is to revolutionize the way people experience with meeting.com. We are dedicated to providing innovative solutions that enhance efficiency, foster growth, and deliver exceptional value. Our goal is to empower our clients through cutting-edge technology and outstanding support, ensuring that every interaction with our services is seamless and rewarding.
                    </p>
                </div>
                
                {/* Goals Block */}
                <div className="flex justify-center">
                    <div className="w-full max-w-3xl p-8 bg-white shadow-2xl rounded-lg text-center relative z-10 animate__animated animate__fadeIn animate__delay-2s">
                        <h3 className="text-3xl font-semibold text-[#003580] mb-6">Our Goals</h3>
                        <ul className="list-disc list-inside text-left text-gray-800 space-y-3 mb-6">
                            <li>Enhance user experience through continuous innovation.</li>
                            <li>Provide real-time solutions to meet evolving needs.</li>
                            <li>Deliver exceptional customer support around the clock.</li>
                            <li>Promote growth and success for our clients through tailored solutions.</li>
                        </ul>
                        <Link to="/contract-us" className="inline-block px-8 py-4 bg-[#003580] text-white font-semibold rounded-lg shadow-md hover:bg-[#00245d] transition-colors">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurMissionSection;
