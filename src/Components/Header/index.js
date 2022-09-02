import React from "react";
import "./index.scss";
import hookahLogo from "../../Images/TZhookah.png";

function Header({ menuOpen, setMenuOpen }) {
  return (
    <div className={"header " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          {/* <h2>Tuzo Hookah</h2>
           */}
          <img src={hookahLogo} alt="Hookah Logo" />
        </div>
        <div className="nav-menu">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">TUZO</a>
            </li>
            <li>
              <a href="#booking">Booking</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
            <li>
              <a href="#services">Our Services</a>
            </li>
          </ul>
        </div>
        {/* <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Header;
