import React from "react";
import "./AboutUs.css";
import aboutus from "./about-us.png";

function AboutUs() {
  return (
    <>
      <h1 className="heading-text">About Us</h1>
      <div className="flex-container">
        <div className="flex-item">
          <div className="about-left">
            <div className="about-section">
              <p>
                Our mission is to provide support and resources for individuals
                struggling with mental health issues. We believe in promoting
                mental wellness through education, awareness, and accessible
                treatment options.
                <br />
                Whether you're dealing with anxiety, depression, or any other
                mental health challenge, know that you're not alone. We're here
                to help you on your journey towards healing and recovery.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-item">
          <div className="about-right">
            <img src={aboutus} alt="about-us" className="about-us-iamge" />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
