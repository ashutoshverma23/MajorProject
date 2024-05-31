import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="flex-container">
        <div className="flex-item">
          <div className="footer-left">
            <h2>About Us</h2>
            <ul id="contact-details">
              <li>We are team PCSE2125-15</li>
              <li>Ashutosh Verma, Ananya Verma, Arpita </li>
            </ul>
          </div>
        </div>
        <div className="flex-item">
          <div className="footer-right">
            <h3>Contact Us</h3>
            <ul id="contact-details">
              <li>Phone: 123-456-7890</li>
              <li>Email: info@example.com</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
