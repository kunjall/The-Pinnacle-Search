import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../../assets/styles/navbar.css';
import NavbarComponent from './navbarComponent'; 
import Home from '../home/home';
import OurProjects from '../ourprojects/ourProjects';
import ContactUs from '../contactus/contactUs';
import WhatWeDo from '../whatwedo/whatWeDo';
import OurVision from '../ourvision/values'

const Navbar = () => {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<OurProjects />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/what-we-offer" element={<WhatWeDo />} />
        <Route path="/our-vision" element={<OurVision />} />
      </Routes>
    </Router>
  );
};

export default Navbar;