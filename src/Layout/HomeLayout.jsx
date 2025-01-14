import { Outlet } from "react-router-dom";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";

const HomeLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-screen w-full">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;