import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/navbar.css';

const NavbarComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>
      <ul className={menuOpen ? 'show' : ''}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/projects" onClick={toggleMenu}>Executed Projects</Link></li>
        <li><Link to="/contact" onClick={toggleMenu}>Contact Us</Link></li>
        <li><Link to="/what-we-do" onClick={toggleMenu}>What We Do?</Link></li>
        <li><Link to="/our-vision" onClick={toggleMenu}>Our Values</Link></li>
      </ul>
    </nav>
  );
};

export default NavbarComponent;
