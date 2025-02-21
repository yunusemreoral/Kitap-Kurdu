import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
    return (
        <div>
            {/* header */}
            <Header/>

            {/* child eleman */}
            <Outlet/>

            {/* footer */}
            <Footer/>
        </div>
    );
};

export default Layout;