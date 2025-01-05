"use client"

import "./css/nav.css";
import eggLogo from "../icons/logo.png";
import cartIcon from "../icons/carton.png";
import { useEffect } from 'react';

function Nav() {
    useEffect(() => {
        const hamburger = document.querySelector('.hamburger');
        const navContent = document.querySelector('.nav-content');
    
        hamburger.addEventListener('click', () => {
          navContent.classList.toggle('show');
        });
    
        // Cleanup function to remove the event listener
        return () => {
          hamburger.removeEventListener('click', () => {
            navContent.classList.toggle('show');
          });
        };
      }, []);
    
    return(
        <div>
  <nav className="navbar" id="navbar">
    <a href="index.html" className="logo-container">
      <img src={eggLogo.src} alt="EGGO Logo" className="logo" />
    </a>
    <div className="hamburger" id="hamburger">
      &#9776;
    </div>
    <div className="nav-content" id="nav-content">
      <div className="nav-links">
        <a href="index.html" className="active">Home</a>
        <a href="education.html">Education</a>
        <a href="scholarships.html">Scholarships</a>
        <a href="jobs.html">Jobs</a>
        <a href="volunteer.html">Volunteering</a>
        <a href="support.html">Support</a>
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search" className="search-bar" />
      </div>
    </div>
    <a href="carton.html" className="cart-container">
      <img src={cartIcon.src} alt="Cart" className="cart-icon" />
      <span className="cart-text">Your carton</span>
    </a>
  </nav>
</div>
    )
}

export default Nav;