import "./index.scss";
import { Navbar, Container, Nav } from "react-bootstrap";
import TZhookah from "../../Images/tuzoLogo.png";

function Header() {
  return (
    <Navbar bg="light" variant="light" expand="lg" className="nav">
      <Container>
        <Navbar.Brand href="#home">
          <img src={TZhookah} height="75" alt="tuzo logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="right-align">
          <Nav>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Tuzo</Nav.Link>
            <Nav.Link>Booking</Nav.Link>
            <Nav.Link>Contact Us</Nav.Link>
            <Nav.Link>Our Services</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
