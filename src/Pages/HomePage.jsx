import About from "../Components/About";
import Banner from "../Components/Banner";
import Benefits from "../Components/Benefits";
import Blogs from "../Components/Blogs";
import Colaborate from "../Components/Colaborate";
import Contact from "../Components/Contact";
import CTASection from "../Components/CTASection";
import FAQ from "../Components/FAQ";
import HowItWork from "../Components/HowItWork";
import HowToApply from "../Components/HowToApply";
import Newsletter from "../Components/Newsletter";
import TopScholarship from "../Components/TopScholarship";
import VideoSection from "../Components/VideoSection";

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <TopScholarship></TopScholarship>
            <HowItWork></HowItWork>
            <Blogs></Blogs>
            <About></About>
            <Benefits></Benefits>
            <HowToApply></HowToApply>
            <CTASection></CTASection>
            <VideoSection></VideoSection>
            <FAQ></FAQ>
            <Contact></Contact>
            <Colaborate></Colaborate>
            <Newsletter></Newsletter>
        </div>
    );
};

export default HomePage;