import React from "react";
import texasapt from "../../assets/texas-aa.png";
import austinapt from "../../assets/austin-aa.png";
import NetVendor from "../../assets/net-vendor.png";
import jobberlogo from "../../assets/jobber.png";

import "./association.css";

const Association = () => {
  const aaa = "https://www.austinaptassoc.com/";
  const taa = "https://www.taa.org/";
  const netvendor = "https://www.netvendor.com/";
  const jobber = "https://getjobber.com/";

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
        <a href={netvendor}>
        <img src={NetVendor} alt="netvendor" />
        </a>
        <a href={jobber}>
        <img src={jobberlogo} alt="jobber" />
        </a>
      </div>
    </div>
  );
};

export default Association;
