"use client"

import "./css/nav.css";
import { useEffect } from 'react';
import Link from 'next/link';


function Nav() {
    useEffect(() => {
        const hamburger = document.querySelector('.hamburger');
        //button test!
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
      <img src="/icons/logo.png" alt="EGGO Logo" className="logo" />
    </Link>
    <div className="hamburger" id="hamburger">
      &#9776;
    </div>
    <div className="nav-content" id="nav-content">
      <div className="nav-links">
        <Link href="/" className="active">Home</Link>
        <Link href="/programs"className="bars">Programs</Link>
        <Link href="/scholarships" className="bars">Scholarships</Link>
        <Link href="/positions"className="bars">Positions</Link>
        <Link href="/support"className="bars">Support</Link>
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search" className="search-bar" />
      </div>
    </div>
    <Link href="/carton" className="cart-container">
      <img src="/icons/carton.png" alt="Cart" className="cart-icon" />
      <span className="cart-text">Your carton</span>
    </Link>
  </nav>
</div>
    )
}

export default Nav;