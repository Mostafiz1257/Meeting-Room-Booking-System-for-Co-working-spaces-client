import ScrollToTopButton from "../../components/ScrollToTopButton";
import MeetTheTeamSection from "./MeetTheTeamSection";
import OurMissionSection from "./OurMissionSection";
import OurStorySection from "./OurStorySection";


const AboutUs = () => {
    return (
        <div>
            <OurMissionSection></OurMissionSection>
            <MeetTheTeamSection></MeetTheTeamSection>
            <OurStorySection></OurStorySection>
            <ScrollToTopButton></ScrollToTopButton>
        </div>
    );
};

export default AboutUs;