import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        <div className="f-left flexColStart">
          <img src="" alt="" width={120} />
          <span className="secondaryText">
            Our Vission is to make all peapke
            <br />
            the best place to live for them
          </span>
        </div>
        <div className="f-right flexColStart">
          <span className="primaryText">Information</span>
          <span className="secondaryText">145 New york,FL 4571,USA</span>
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
