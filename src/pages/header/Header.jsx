import React from "react";
import "./header.css";

import trashlogo from "../../assets/trashguylogo.png";

function Header() {
  return (
    <div className="eco-header-container" id="home">
      <div className="header-content">
        <h1>Trash Made Simple<br />Valet Services Redefining Convenience.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
          distinctio quibusdam expedita.
        </p>
        <button type="contact" class="btn">Contact Us</button>

      </div>

      <div className="header-image">
        <img src={trashlogo} alt="trashlog" />
      </div>
      </div>
  );
}

export default Header;
