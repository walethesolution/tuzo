import "./index.scss";
import Header from "../Header";
import Booking from "../Booking";
import Service from "../Service";
import Footer from "../Footer";
import HomeAboutContact from "../HomeAboutContact";

function Layout() {
  return (
    <div className="layout">
      <Header />
      <HomeAboutContact />
      <Booking />
      <Service />
      <Footer />
    </div>
  );
}

export default Layout;
