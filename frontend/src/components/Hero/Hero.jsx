import React from 'react';
import './Hero.css';
import logo from '../../assets/logo.png';
import CountdownTimer from '../CountdownTimer/CountdownTimer';
import mandalaSvg from '../../assets/mandala.svg';

const Hero = () => {
  const targetDate = new Date('2026-01-16T00:00:00');

  return (
    <div className="hero-container">
      {/* The mandala (still z-index: 1) */}
      <img
        src={mandalaSvg}
        alt=""
        className="background-mandala"
      />

      {/* LOGO (no wrapper) */}
      <div className="hero-logo-container">
        <img src={logo} alt="Srijan Logo" className="hero-logo" />
      </div>

      {/* TITLE (no wrapper) */}
      <h1 className="hero-title">Anant Kalpavariksham</h1>
      <p className="hero-subtitle">-from Centuries Past to Creations Beyond</p>

      {/* COUNTDOWN (no wrapper) */}
      <div className="countdown-wrapper">
        <CountdownTimer targetDate={targetDate} />
      </div>
    </div>
  );
};

export default Hero;