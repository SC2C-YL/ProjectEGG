'use client'

import { useEffect, useRef, useState } from "react";
import Image from "next/image"
import Nav from "../components/nav"
import c1 from "../images/c1.png"
import c2 from "../images/c2.png"
import c3 from "../images/c3.png"
import c4 from "../images/c4.png"
import c5 from "../images/c5.png"
import left from "../icons/left.png"
import right from "../icons/right.png"

export default function Home() {
  return (
    <div>
      <Nav/>
      <div className="carousel-container">
        <div className="carousel">
            <div className="carousel-item active" data-link="education.html">
                <img src={c1.src} alt="C1" />
            </div>
            <div className="carousel-item" data-link="education.html">
                <img src={c2.src} alt="C2" />
            </div>
            <div className="carousel-item" data-link="education.html">
                <img src={c3.src} alt="C3" />
            </div>
            <div className="carousel-item">
                <a href="https://voterregistration.ct.gov/OLVR/welcome.do">
                    <img src={c4.src} alt="C4" />
                </a>
            </div>
            <div className="carousel-item" data-link="education.html">
                <img src={c5.src} alt="C5" />
            </div>
        </div>
        <button className="carousel-btn left-btn">
            <img src={left.src} alt="Left" />
        </button>
        <button className="carousel-btn right-btn">
            <img src={right.src} alt="Right" />
        </button>
        <div className="carousel-indicators">
            <span className="indicator active"></span>
            <span className="indicator"></span>
            <span className="indicator"></span>
            <span className="indicator"></span>
            <span className="indicator"></span>
        </div>
    </div>

      </div>
  );
}
