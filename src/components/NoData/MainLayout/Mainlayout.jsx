import { Outlet } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";

const Mainlayout = () => {
  return (
    <div>
      <div className="">
        <div className="h-[60px]">
          <Navbar></Navbar>
        </div>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Mainlayout;
