import React from "react";
import "./Hero.css";
import logo from "../../assets/logo.png.png";
import CountdownTimer from "../CountdownTimer/CountdownTimer";
import Mandala from "../../assets/mandala.png";

const Hero = () => {
  const targetDate = new Date("2026-01-16T00:00:00");

  return (
    <div className="hero-container">
      <img
        src={Mandala}
        alt="Mandala Background Art"
        className="hero-mandala"
      />
      <div className="mandala-layer"></div>
      <div className="hero-logo-container">
        <img src={logo} alt="Srijan Logo" className="hero-logo" />
      </div>

      <h1 className="hero-title">Anant Kalpavariksham</h1>
      <p className="hero-subtitle">-from Centuries Past to Creations Beyond-</p>

      <CountdownTimer targetDate={targetDate} />
    </div>
  );
};

export default Hero;
