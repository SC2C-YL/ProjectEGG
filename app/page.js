'use client'

import { useEffect, useRef, useState } from "react";
import Image from "next/image"
import Nav from "../components/nav"

export default function Home() {
  return (
    <div>
      <Nav/>
      <div className="carousel-container">
        <div className="carousel">
            <div className="carousel-item active" data-link="education.html">
                <img src="/images/c1.png" alt="C1" />
            </div>
            <div className="carousel-item" data-link="education.html">
                <img src="/images/c2.png" alt="C2" />
            </div>
            <div className="carousel-item" data-link="education.html">
                <img src="/images/c3.png" alt="C3" />
            </div>
            <div className="carousel-item">
                <a href="https://voterregistration.ct.gov/OLVR/welcome.do">
                    <img src="/images/c4.png" alt="C4" />
                </a>
            </div>
            <div className="carousel-item" data-link="education.html">
                <img src="/images/c5.png" alt="C5" />
            </div>
        </div>
        <button className="carousel-btn left-btn">
            <img src="/icons/left.png" alt="Left" />
        </button>
        <button className="carousel-btn right-btn">
            <img src="/icons/right.png" alt="Right" />
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
