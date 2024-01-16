import React from "react";
import { useRef } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";

import ecologo from "../../assets/eco-valet-logo.png";

import "./nav.css";

function Navbar() {
  const navRef = useRef();

  // const showNavbar = () => {
  //   navRef.current.classList.toggle("responsive_nav");
  // };

  return (
    <div className="header-nav-container">
      <div className="logo-container">
        <img src={ecologo} alt="logo" />
      </div>
      {/* <div className="nav-container"> */}
      <nav ref={navRef}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
        {/* <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button> */}
      </nav>
      {/* </div> */}
      {/* <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button> */}
    </div>
  );
}

export default Navbar;
