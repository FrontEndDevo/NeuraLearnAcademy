import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import { createPortal } from "react-dom";
import Toast from "../shared/popup/Toast";
import Spinner from "../shared/popup/Spinner";

const popupsMessages = document.getElementById("popups");

const Layout = () => {
  return (
    <>
      {createPortal(<Toast />, popupsMessages)}
      {createPortal(<Spinner />, popupsMessages)}
      <Navbar />
      <div className="my-60 md:my-40">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
