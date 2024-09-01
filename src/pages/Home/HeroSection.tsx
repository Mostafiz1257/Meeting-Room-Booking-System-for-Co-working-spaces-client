import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';

const HeroSection = () => {
    const images = [img1, img2];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 3000); // Change image every 5 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [images.length]);

    return (
        <div className="relative w-full h-screen overflow-hidden">
            <div className="flex h-full transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <div key={index} className="flex-shrink-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
                        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
                        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
                            <h1 className="text-5xl font-bold mb-4">Book Your Ideal Meeting Room with Ease.</h1>
                            <p className="text-lg mb-8 max-w-xl">Efficient, hassle-free room booking for all your meeting needs.</p>
                            <Link to='/meeting-rooms'>
                                <button className="px-6 py-3 bg-[#003580] hover:bg-[#002b5f] text-white font-semibold rounded-md transition duration-300">
                                    Book Now
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`h-3 w-3 rounded-full ${currentIndex === index ? 'bg-[#003580]' : 'bg-white'}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroSection;
