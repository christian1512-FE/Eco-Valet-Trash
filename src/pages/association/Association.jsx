import React from "react";
import texasapt from "../../assets/texas-apt-asso.png";
import austinapt from "../../assets/austin-apt-asso.png";

import "./association.css";

const Association = () => {
  const aaa = "https://www.austinaptassoc.com/";
  const taa = "https://www.taa.org/";

  return (
    <div className="association-container">
      <h1>Proudly Associated With</h1>
      <div className="association-cards">
        <a href={aaa}>
        <img src={austinapt} alt="austin-association" />
        </a>
        <a href={taa}>
        <img src={texasapt} alt="texas-association" />
        </a>
      </div>
    </div>
  );
};

export default Association;
