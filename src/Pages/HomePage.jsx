import Banner from "../Components/Banner";
import Benefits from "../Components/Benefits";
import Blogs from "../Components/Blogs";
import FAQ from "../Components/FAQ";
import HowItWork from "../Components/HowItWork";
import Newsletter from "../Components/Newsletter";
import TopScholarship from "../Components/TopScholarship";

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <TopScholarship></TopScholarship>
            <HowItWork></HowItWork>
            <Blogs></Blogs>
            <Benefits></Benefits>
            <FAQ></FAQ>
            <Newsletter></Newsletter>
        </div>
    );
};

export default HomePage;