import Banner from "../Components/Banner";
import Blogs from "../Components/Blogs";
import FAQ from "../Components/FAQ";
import TopScholarship from "../Components/TopScholarship";

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <TopScholarship></TopScholarship>
            <Blogs></Blogs>
            <FAQ></FAQ>
        </div>
    );
};

export default HomePage;