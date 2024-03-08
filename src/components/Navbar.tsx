import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';

const Navbar: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleIsActive = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a role="button" className={`navbar-burger burger ${isActive ? "is-active" : ""}`} aria-label="menu" aria-expanded="false" data-target="navbarHome" onClick={toggleIsActive}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarHome" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
        <div className="navbar-start">
          <Link to="/" className="navbar-item animate__animated animate__hover animate__shakeX has-text-weight-bold is-size-4 has-text-info">
            Home
          </Link>
          <Link to="/about" className="navbar-item animate__animated animate__hover animate__shakeX has-text-weight-bold is-size-4 has-text-info">
            About Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;