"use client"

import "./css/nav.css";
import eggLogo from "../icons/logo.png";
import cartIcon from "../icons/carton.png";
import { useEffect } from 'react';
import Link from 'next/link';
function Nav() {
    useEffect(() => {
        const hamburger = document.querySelector('.hamburger');
        //hieee
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
    <Link href="/" className="logo-container">
      <img src={eggLogo.src} alt="EGGO Logo" className="logo" />
    </Link>
    <div className="hamburger" id="hamburger">
      &#9776;
    </div>
    <div className="nav-content" id="nav-content">
      <div className="nav-links">
        <Link href="/" className="active">Home</Link>
        <Link href="/education">Education</Link>
        <Link href="/scholarships">Scholarships</Link>
        <Link href="/positions">Positions</Link>
        <Link href="/support">Support</Link>
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search" className="search-bar" />
      </div>
    </div>
    <Link href="/carton" className="cart-container">
      <img src={cartIcon.src} alt="Cart" className="cart-icon" />
      <span className="cart-text">Your carton</span>
    </Link>
  </nav>
</div>
    )
}

export default Nav;