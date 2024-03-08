import React from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">

      <div id="navbarHome" className="navbar-menu">
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