// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '/Users/alicezhao/Code/courts/src/App.css';


const Navbar = () => {
  const scrollToBottom = () => {
    const element = document.getElementById('footer');
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    
    <nav className="navbar">
    <div className="navbar-left">
      <Link to="/"><img src={require('/Users/alicezhao/Code/courts/src/files/Logo_of_Cromarty_Tennis_Club-removebg-preview.png')} alt='logo' className='logo' /></Link>
    </div>
    <div className="navbar-right">
      <Link to="/about">About</Link>
      <Link to="/courts">Courts</Link>
      <Link to="/members">Membership</Link>
      <a href="#footer" onClick={scrollToBottom}>Contact</a>

    </div>
  </nav>
  );
};

export default Navbar;
