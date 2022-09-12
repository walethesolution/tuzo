import "./index.scss";
import Home from "../Home";
import About from "../About";
import Contact from "../Contact";
import { Link } from "react-router-dom";

function HomeAboutContact() {
  return (
    <div className="hac">
      <Link to="/">
        <Home />
      </Link>
      <About />
      <Contact />
    </div>
  );
}

export default HomeAboutContact;
