import React from "react";
import "./index.scss";
import { useState } from "react";
import Header from "../Header";
import Home from "../Home";
import About from "../About";
import Booking from "../Booking";
import Contact from "../Contact";
import Services from "../Services";
import Menu from "../Menu";

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="layout">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Home />
        <About />
        <Booking />
        <Contact />
        <Services />
      </div>
    </div>
  );
}

export default Layout;
