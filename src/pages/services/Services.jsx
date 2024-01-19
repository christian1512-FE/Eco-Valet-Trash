import React from "react";
import trashpickup from "../../assets/trash-pickup.png";
import trashbulk from "../../assets/trash-bulk.png";
import netvendor from "../../assets/netvendor.png";

import "./services.css";

function Services() {
  return (
    <div className="services-container" id="services">
      <h1>Services</h1>
      <p>
        Provide a general description of the items below and introduce the
        services you offer. Click on the text box to edit the content.
      </p>
      <div className="services-cards-container">
        <div className="services-cards">
          <img src={trashpickup} alt="trash-valet" />
          <h3>Trash Valet</h3>
          <p>
            Describe your service here. What makes it great? Use short catchy
            text to tell people what you offer, and the benefits they will
            receive. A great description gets readers in the mood, and makes
            them more likely to go ahead and book.
          </p>
        </div>

        <div className="services-cards">
          <img src={trashbulk} alt="trash-valet" />
          <h3>Bulk Trash Pickup</h3>
          <p>
            Describe your service here. What makes it great? Use short catchy
            text to tell people what you offer, and the benefits they will
            receive. A great description gets readers in the mood, and makes
            them more likely to go ahead and book.
          </p>
        </div>

        <div className="services-cards">
          <img src={netvendor} alt="trash-valet" />
          <h3>Community Events & Sponsorships</h3>
          <p>
            Describe your service here. What makes it great? Use short catchy
            text to tell people what you offer, and the benefits they will
            receive. A great description gets readers in the mood, and makes
            them more likely to go ahead and book.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
