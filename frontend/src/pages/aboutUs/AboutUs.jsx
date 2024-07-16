import React from "react";
import aboutus from "./about-us.png";
import aboutUs from "../../assets/images/about-us.jpg";

const AboutUs = () => {
  return (
    <>
      <div className="relative">
        <img src={aboutUs} alt="writeStory" className="w-full" />
        <h1 className="md:text-8xl uppercase text-3xl text-center text-white font-bold absolute top-1/2 left-1/2 transform -translate-x-1/4 -translate-y-1/2">
          About us
        </h1>
      </div>
      <div className="flex justify-center md:flex-row flex-col mt-16 mb-16">
        <div className="w-1/2 flex-1">
          <div className="flex flex-col items-center justify-center text-justify max-w-[620px]">
            <div className="m-1 ml-20 text-lg">
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
        <div className="flex-1 w-1/2 flex-row">
          <div className="flex flex-col items-center justify-center">
            <img src={aboutus} alt="about-us" className="w-9/12 p-4" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
