// src/components/Navbar.js
import React from 'react';
import { ReactComponent as FacebookIcon } from '/Users/alicezhao/Code/courts/src/files/iconmonstr-facebook-6.svg';
import { ReactComponent as InstagramIcon } from '/Users/alicezhao/Code/courts/src/files/Instagram-logo.svg';
import '/Users/alicezhao/Code/courts/src/App.css';



const Footer = () => {
  return (
    <a id="footer">
    <div className='footer'>
        <div className='contact'>
          <div className='subcontact'>
           <h2>Contact Us</h2>
           <p className='links'>cromartytennisclub@gmail.com</p>
           <p className='links'>(902) 564-6666</p>
          </div >
          <div className='subcontact'>
          <h2>Follow Us</h2>
            <div className='socials'>
              <FacebookIcon className='links' width="50" height="50"/>
              <InstagramIcon className='links' width="50" height="50" />
            </div>
          </div>
        </div>
        <div className='info'>
          <p>Cromarty Tennis Club - 65 Cromarty Street Sydney, Nova Scotia, Canada</p>
          <p>Website created by Alice Zhao</p>
        </div>
    </div>
    </a>
  );
};

export default Footer;
