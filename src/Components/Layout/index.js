import "./index.scss";
import Header from "../Header";
import Booking from "../Booking";
import Service from "../Service";
import Footer from "../Footer";
import { Routes, Route } from "react-router-dom";
import HomeAboutContact from "../HomeAboutContact";

function Layout() {
  return (
    <div className="layout">
      <Header />
      {/* <Routes> */}
      {/* <Route path="/" element={<HomeAboutContact />} /> */}
      <HomeAboutContact />
      {/* <Route path="/booking" element={<Booking />} />
       */}
      <Booking />
      <Service />
      {/* <Route path="/service" element={<Service />} /> */}
      {/* </Routes> */}
      <Footer />
    </div>
  );
}

export default Layout;
