import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import ecologo from "../../assets/eco-valet-logo-copy.png";

import "./footer.css";

const Footer = () => {
  const linkedin = "https://www.linkedin.com/in/eco-valet-trash/";
  const insta = "https://www.instagram.com/ecovalettrash/";

  return (
    <div className="footer-container">
      <div className="footer-logo">
      <a href="#nav">
        <img src={ecologo} alt="logo" /> 
        </a>
        </div>
      <div className="links">
        <a href={linkedin}>
          <FaLinkedin />
        </a>
        <a href={insta}>
          <FaInstagram />
        </a>
      </div>
      {/* <span class="phone">800.ECO.1826</span> */}
      <div className="footer-copy-right">
       Copyright © {new Date().getFullYear()} <strong> Eco Valet Trash</strong>
      </div>
    </div>
  );
}

export default Footer;

//ADD phone number
// address
// logo
// social media
