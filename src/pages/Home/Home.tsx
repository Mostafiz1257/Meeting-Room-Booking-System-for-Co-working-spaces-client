import BookingSteps from "../../components/BookingSteps";
import TestimonialsCarousel from "./TestimonialsCarousel";
import WhyChooseUs from "../../components/WhyChooseUs";
import HeroSection from "./HeroSection";
import ServiceAdvertisement from "./ServiceAdvertisement";
import RoomSection from "./RoomSection";

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <ServiceAdvertisement></ServiceAdvertisement>
            <RoomSection></RoomSection>
            <WhyChooseUs></WhyChooseUs>
            <BookingSteps></BookingSteps>
            <TestimonialsCarousel></TestimonialsCarousel>
        </div>
    );
};

export default Home;