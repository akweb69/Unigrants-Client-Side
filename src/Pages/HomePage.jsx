import About from "../Components/About";
import Banner from "../Components/Banner";
import Benefits from "../Components/Benefits";
import Blogs from "../Components/Blogs";
import Contact from "../Components/Contact";
import CTASection from "../Components/CTASection";
import FAQ from "../Components/FAQ";
import HowItWork from "../Components/HowItWork";
import HowToApply from "../Components/HowToApply";
import Newsletter from "../Components/Newsletter";
import TopScholarship from "../Components/TopScholarship";

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
            <FAQ></FAQ>
            <Contact></Contact>
            <Newsletter></Newsletter>
        </div>
    );
};

export default HomePage;