import BookingSteps from "../../components/BookingSteps";
import TestimonialsCarousel from "./TestimonialsCarousel";
import WhyChooseUs from "../../components/WhyChooseUs";
import HeroSection from "./HeroSection";
import ServiceAdvertisement from "./ServiceAdvertisement";
import RoomSection from "./RoomSection";
import ScrollToTopButton from "../../components/ScrollToTopButton";

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <ServiceAdvertisement></ServiceAdvertisement>
            <RoomSection></RoomSection>
            <BookingSteps></BookingSteps>
            <WhyChooseUs></WhyChooseUs>
            <TestimonialsCarousel></TestimonialsCarousel>
            <ScrollToTopButton></ScrollToTopButton>
        </div>
    );
};

export default Home;