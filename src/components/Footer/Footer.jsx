import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        <div className="f-left flexColStart">
          <img src="" alt="" width={120} />
          <span className="secondaryText">
            Our Vission is to find the best place
            <br />
            for peaple to live for them
          </span>
        </div>
        <div className="f-right flexColStart">
          <span className="primaryText">Information</span>
          <span className="secondaryText">New York</span>
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Servcices</span>
            <span>Product</span>
            <span>About</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
