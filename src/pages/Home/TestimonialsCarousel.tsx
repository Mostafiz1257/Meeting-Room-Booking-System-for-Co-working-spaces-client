import  { useState } from 'react';

const testimonials = [
    {
        name: "John Doe",
        role: "CEO, Pinkle LTD",
        testimonial: "This service has transformed our business. The seamless booking process and excellent support have been game-changers.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSovGYaTRvo9g2zFuU629f_m5Kiladmz7iem0La5XwYMC2UFQN1oJXZTbyxmDun9VgcZjI&usqp=CAU"
    },
    {
        name: "Jane Smith",
        role: "Marketing Director, Company Aiso Boss",
        testimonial: "I love how easy it is to schedule and manage bookings. The flexibility and real-time availability are top-notch.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBhOH2AS2a7-FQYRTFgOlQMSFZ0GDC_ELmNw&s"
    },
    {
        name: "Emily Johnson",
        role: "Event Coordinator, T Hart",
        testimonial: "The support team is fantastic! They're always available to help and make sure everything runs smoothly.",
        image: "https://api.office-people.de/wp-content/uploads/2021/07/office-people-kaufmaennisch-berufsfeld-270px.png"
    },
   
];

const TestimonialsCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === testimonials.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="max-w-7xl mx-auto py-16 px-6 relative">
            <h2 className="text-4xl font-bold text-[#003580] mb-8 text-center">What Our Customers Say</h2>
            <div className="relative overflow-hidden">
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="min-w-full flex-shrink-0 p-8"
                        >
                            <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center text-center">
                                <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full mb-4"/>
                                <h3 className="text-2xl font-semibold text-[#003580] mb-2">{testimonial.name}</h3>
                                <p className="text-sm text-gray-600 mb-4">{testimonial.role}</p>
                                <p className="text-lg text-gray-800 italic max-w-xl">{testimonial.testimonial}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-[#003580] text-white rounded-full p-2 hover:bg-[#00245d] transition-colors"
            >
                &#8592;
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-[#003580] text-white rounded-full p-2 hover:bg-[#00245d] transition-colors"
            >
                &#8594;
            </button>
        </div>
    );
};

export default TestimonialsCarousel;
