import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-zinc-800 py-4">
      <div className="flex md:flex-row flex-col justify-around items-center min-h-32">
        <div className="items-center justify-center">
          <div className="flex flex-col text-neutral-200">
            <ul>
              <li>About Us</li>
              <li>Stories</li>
              <li>Privacy Policy</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col text-neutral-200">
          <div className="">
            <ul>
              <li>Our Team</li>
              <li>Help</li>
              <li>Phone: 123-456-7890</li>
              <li>Email: info@example.com</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="h-[1px] w-1/2 bg-zinc-700 mx-auto"></div>
      <div>
        <p className="text-center bg-zinc-800 text-neutral-200 p-2">
          &copy; 2024 All Rights Reserved
        </p>
        <p className="text-center text-neutral-300 p-2 text-sm">
          Disclaimer: We are working to deliver a product to help people know
          about mental health and their own mental stress level in an
          interactive way
        </p>
      </div>
    </footer>
  );
};

export default Footer;
