import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#gallery">Gallery</a>
        <a href="#events">Events</a>
        <a href="#sponsors">Sponsors</a>
        <a href="#merchandise">Merchandise</a>
        <a href="#team">Team</a>
      </div>
      <div className='register'>
        <a href="#register" className="register-btn">
        Register
      </a>
      </div>
    </nav>
    
  );
};

export default Navbar;