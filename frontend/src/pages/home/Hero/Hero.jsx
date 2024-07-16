import React from "react";
import "./Hero.css";
import saathiHero from "../../../assets/images/saathi-hero.jpg";

const Hero = () => {
  return (
    <div>
      <img
        src={saathiHero}
        alt="heroImage"
        className="w-full overflow-hidden object-cover"
      />
      <div class="absolute top-1/2 left-[40%] uppercase">
        <p className="text-4xl font-bold text-white">
          <span className="text-orange-400 text-6xl">SAATHI</span>{" "}
        </p>
        <h1 className="text-4xl font-bold text-white">
          Your Personal Mental <br /> Health Companion
        </h1>
      </div>
    </div>
  );
};

export default Hero;
