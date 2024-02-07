import React from "react";
import apartment from "../../assets/free-apartment.png";

import "./about.css";

function About() {
  return (
    <div className="about-container" id="about">
      <div className="about-image">
        <img src={apartment} alt="trash-steps" />
      </div>
      <div className="about-content">
        <h1>About Us</h1>
        <p>
          Since our founding, Eco Valet Trash has been known for quality
          services, exceptional efficiency and the highest level of
          professionalism. No matter what service you&apos;re looking for, we
          guarantee to not only meet, but exceed your expectations and ensure
          your full satisfaction.
        </p>
        <br />
        <p>
          Our team is up for every job, managing projects with the skill and
          experience our clients have come to expect. Please get in touch to
          learn more about our team, our company or for details about the
          services we provide.
        </p>
      </div>
    </div>
  );
}

export default About;
