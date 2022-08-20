import React from "react";
// import "./index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Header";
import Home from "../Home";
import About from "../About";
import Bookings from "../Bookings";
import Contact from "../Contact";
import Services from "../Services";

function Layout() {
  return (
    <div className="layout">
      <Header />
      <div className="sections">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default Layout;
