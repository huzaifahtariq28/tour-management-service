import React from "react";

import t1 from "../assets/images/3.jpg";
import clock from "../assets/images/clock.png"
import info from "../assets/images/info.png"
import price from "../assets/images/price.png"
import map from "../assets/images/map.png"

const Destination = () => {
  return (
    <>
      <div className="destination-main">
        <div className="destination-image">
          <img src={t1} alt=""></img>
        </div>
        <div className="destination-content">
          <div className="destination-text">
            <p>Spiritual Gatherings and Retreats</p>
            <span>Custom experiences from:</span>
            <span>5-Star</span>
          </div>
          {/* <div className="destination-icons">
            <a href="#">
              <img src={clock}></img>
            </a>
            <a href="#">
              <img src={info}></img>
            </a>
            <a href="#">
              <img src={price}></img>
            </a>
            <a href="#">
              <img src={map}></img>
            </a>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Destination;