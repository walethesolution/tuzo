import "./index.scss";
import { Navbar, Nav } from "react-bootstrap";
import TZhookah from "../../Images/tuzoLogo.png";

function Header() {
  return (
    <Navbar bg="light" variant="light" expand="lg" className="mainNav">
      <Navbar.Brand href="#home" className="nav">
        <img src={TZhookah} height="75" width="100" alt="tuzo logo" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="right-align">
        <Nav className="links">
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>Tuzo</Nav.Link>
          <Nav.Link>Booking</Nav.Link>
          <Nav.Link>Contact Us</Nav.Link>
          <Nav.Link>Our Services</Nav.Link>
          {/* <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">Tuzo</a>
            </li>
            <li>
              <a href="#booking">Booking</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#service">Our Services</a>
            </li>
          </ul> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
