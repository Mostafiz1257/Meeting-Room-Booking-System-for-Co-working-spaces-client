import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';

const HeroSection = () => {
    const images = [img1, img2];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative w-full h-screen overflow-hidden">
            <div
                className="flex h-full transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${image})` }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
                        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
                            <h1 className="text-6xl font-extrabold mb-6 tracking-wide leading-tight drop-shadow-lg">
                                Discover the Perfect Space for Your Meetings
                            </h1>
                            <p className="text-2xl mb-10 max-w-2xl leading-relaxed drop-shadow-md">
                                Experience luxury and convenience with seamless meeting room bookings, tailored to your needs.
                            </p>
                            <Link to="/meeting-rooms">
                                <button className="px-8 py-4 bg-[#003580] hover:bg-[#002b5f] text-white text-lg font-bold rounded shadow-lg transition duration-300 transform hover:scale-105">
                                    Book Your Slot Now
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`h-4 w-4 rounded-full ${currentIndex === index ? 'bg-[#003580]' : 'bg-white'}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroSection;
