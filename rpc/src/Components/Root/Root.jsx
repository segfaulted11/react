import Header from "../Header/Header";
import {Outlet} from "react-router";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";

const Root = () => {
    return (
        <div>
            <Header/>
            <div>
            <Sidebar/>
            <Outlet></Outlet>
            </div>
            <Footer/>
        </div>
    );
};

export default Root;