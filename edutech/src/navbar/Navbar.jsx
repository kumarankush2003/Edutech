import React from 'react';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <>
    <div className="navbar">
        <div className='navbar-link'>
        <a href="tel:+91-744-2777777" className="contact-link">
          +91-744-2777777
        </a>
        <a href="https://wa.me/7340010345" className="contact-link">
          73400 10345
        </a>
        </div>
        <div className="additional-links">
        <a href="#" className="navbar-link">
          <i className="fa fa-laptop"></i> Apply Online
        </a>
        <a href="#" className="navbar-link">
          <i className="fa fa-rupee-sign"></i> Pay Fee Online
        </a>
      </div>
      </div>
    
      <div className='nav-bottom'>
        <a href="#" className="navbar-c">APPLY ONLINE</a>
        <a href="#" className="navbar-c">ADMISSIONS</a>
        <a href="#" className="navbar-c">COURSES</a>
        <a href="#" className="navbar-c">STUDENT ZONE</a>
        <a href="#" className="navbar-c">RESULTS</a>
        <a href="#" className="navbar-c">ABOUT US</a>
        <a href="#" className="navbar-c">CONTACT US</a>
        <a href="#" className="navbar-c">CENTERS</a>
      </div>
      </>
  );
};

export default Navbar;
