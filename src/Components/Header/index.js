import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <h1 className="logo">TUZO Hookah</h1>
      <div className="right">
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">TUZO</a>
            </li>
            <li>
              <a href="/bookings">Bookings</a>
            </li>
            <li>
              <a href="/contact">Contacts</a>
            </li>
            <li>
              <a href="services">Our Services</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
