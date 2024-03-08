import React, { useState } from 'react';
import 'animate.css';

const Header: React.FC = () => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <section className="hero is-primary is-bold">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 
            className={`title is-1 animate__animated animate__bounce ${hover ? 'has-text-warning' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            London Weather & Tube Status
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Header;