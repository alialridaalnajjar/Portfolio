"use client";

import { useAnimationFrame } from "motion/react";
import { useRef } from "react";

export default function UseAnimationFrame() {
  const cube1Ref = useRef<HTMLDivElement>(null);
  const cube2Ref = useRef<HTMLDivElement>(null);
  const cube3Ref = useRef<HTMLDivElement>(null);
  const pyramid1Ref = useRef<HTMLDivElement>(null);
  const pyramid2Ref = useRef<HTMLDivElement>(null);
  const octahedronRef = useRef<HTMLDivElement>(null);

  useAnimationFrame((t) => {
    // Main cube animation
    if (cube1Ref.current) {
      const rotateX = (t / 50) % 360;
      const rotateY = (t / 30) % 360;
      const x = Math.sin(t / 3000) * 100;
      const y = Math.cos(t / 4000) * 50;

      const glitchX = Math.random() > 0.98 ? (Math.random() - 0.5) * 30 : 0;
      const glitchY = Math.random() > 0.98 ? (Math.random() - 0.5) * 30 : 0;
      const shouldGlitch = Math.random() > 0.95;

      cube1Ref.current.style.transform = `translateX(${
        x + glitchX
      }px) translateY(${
        y + glitchY
      }px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      cube1Ref.current.style.filter = shouldGlitch
        ? `hue-rotate(${Math.random() * 360}deg) contrast(${
            150 + Math.random() * 100
          }%)`
        : "none";
    }

    if (cube2Ref.current) {
      const rotateX = (t / 25) % 360;
      const rotateY = (t / 40) % 360;
      const x = Math.cos(t / 2000) * 200 + Math.sin(t / 5000) * 100;
      const y = Math.sin(t / 2500) * 150;

      const glitchRotate =
        Math.random() > 0.97 ? (Math.random() - 0.5) * 180 : 0;
      const shouldGlitch = Math.random() > 0.93;

      cube2Ref.current.style.transform = `translateX(${x}px) translateY(${y}px) rotateX(${
        rotateX + glitchRotate
      }deg) rotateY(${rotateY}deg) rotateZ(${Math.sin(t / 3000) * 45}deg)`;
      cube2Ref.current.style.filter = shouldGlitch
        ? `saturate(${200 + Math.random() * 200}%) brightness(${
            80 + Math.random() * 40
          }%)`
        : "none";
      cube2Ref.current.style.opacity = Math.random() > 0.96 ? "0.3" : "1";
    }

    // Third cube (large, slow)
    if (cube3Ref.current) {
      const rotateX = (t / 80) % 360;
      const rotateY = (t / 120) % 360;
      const x = Math.sin(t / 12000) * 300;
      const y = Math.cos(t / 6000) * 200;

      const shouldGlitch = Math.random() > 0.94;
      const glitchScale = Math.random() > 0.98 ? 0.5 + Math.random() * 1 : 1;

      cube3Ref.current.style.transform = `translateX(${x}px) translateY(${y}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${glitchScale})`;
      cube3Ref.current.style.filter = shouldGlitch
        ? `invert(${Math.random() * 0.3}) hue-rotate(${Math.random() * 360}deg)`
        : "none";
    }

    // Pyramid 1
    if (pyramid1Ref.current) {
      const rotateY = (t / 35) % 360;
      const x = Math.sin(t / 4000) * 250;
      const y = Math.cos(t / 3500) * 100;

      const shouldGlitch = Math.random() > 0.96;
      pyramid1Ref.current.style.transform = `translateX(${x}px) translateY(${y}px) rotateY(${rotateY}deg) rotateX(${
        Math.sin(t / 5000) * 30
      }deg)`;
      pyramid1Ref.current.style.filter = shouldGlitch
        ? `blur(${Math.random() * 3}px) contrast(${120 + Math.random() * 80}%)`
        : "none";
    }

    // Pyramid 2
    if (pyramid2Ref.current) {
      const rotateY = (t / 45) % 360;
      const x = Math.cos(t / 3500) * 180;
      const y = Math.sin(t / 4500) * 120;

      const shouldGlitch = Math.random() > 0.95;
      pyramid2Ref.current.style.transform = `translateX(${x}px) translateY(${y}px) rotateY(${rotateY}deg) rotateZ(${
        Math.cos(t / 4000) * 20
      }deg)`;
      pyramid2Ref.current.style.filter = shouldGlitch
        ? `sepia(${Math.random() * 100}%) hue-rotate(${Math.random() * 360}deg)`
        : "none";
    }

    // Octahedron
    if (octahedronRef.current) {
      const rotateX = (t / 60) % 360;
      const rotateY = (t / 40) % 360;
      const rotateZ = (t / 70) % 360;
      const x = Math.sin(t / 5500) * 350;
      const y = Math.cos(t / 4800) * 180;

      const shouldGlitch = Math.random() > 0.94;
      const glitchSkew = Math.random() > 0.98 ? Math.random() * 100 : 0;

      octahedronRef.current.style.transform = `translateX(${x}px) translateY(${y}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) skew(${glitchSkew}deg)`;
      octahedronRef.current.style.filter = shouldGlitch
        ? `drop-shadow(0 0 10px #8a2be2) brightness(${
            120 + Math.random() * 60
          }%)`
        : "none";
    }
  });

  return (
    <div className="glitch-container">
      <div className="scanlines"></div>
      <div className="noise-overlay"></div>

      {/* Main Cube */}
      <div className="shape-container">
        <div className="cube main-cube" ref={cube1Ref}>
          <div className="side front" />
          <div className="side back" />
          <div className="side right" />
          <div className="side left" />
          <div className="side top" />
          <div className="side bottom" />
        </div>
      </div>

      {/* Second Cube - Smaller */}
      <div className="shape-container">
        <div className="cube small-cube" ref={cube2Ref}>
          <div className="side front" />
          <div className="side back" />
          <div className="side right" />
          <div className="side left" />
          <div className="side top" />
          <div className="side bottom" />
        </div>
      </div>

      {/* Third Cube - Large */}
      <div className="shape-container">
        <div className="cube large-cube" ref={cube3Ref}>
          <div className="side front" />
          <div className="side back" />
          <div className="side right" />
          <div className="side left" />
          <div className="side top" />
          <div className="side bottom" />
        </div>
      </div>

      {/* Pyramid 1 */}
      <div className="shape-container">
        <div className="pyramid" ref={pyramid1Ref}>
          <div className="pyramid-face front" />
          <div className="pyramid-face back" />
          <div className="pyramid-face left" />
          <div className="pyramid-face right" />
          <div className="pyramid-base" />
        </div>
      </div>

      {/* Pyramid 2 */}
      <div className="shape-container">
        <div className="pyramid small-pyramid" ref={pyramid2Ref}>
          <div className="pyramid-face front" />
          <div className="pyramid-face back" />
          <div className="pyramid-face left" />
          <div className="pyramid-face right" />
          <div className="pyramid-base" />
        </div>
      </div>

      {/* Octahedron */}
      <div className="shape-container">
        <div className="octahedron" ref={octahedronRef}>
          <div className="octa-face face1" />
          <div className="octa-face face2" />
          <div className="octa-face face3" />
          <div className="octa-face face4" />
          <div className="octa-face face5" />
          <div className="octa-face face6" />
          <div className="octa-face face7" />
          <div className="octa-face face8" />
        </div>
      </div>

      <div className="glitch-overlay"></div>
      <StyleSheet />
    </div>
  );
}

/**
 * ==============   Styles   ================
 */
function StyleSheet() {
  return (
    <style>{`
      @keyframes scanline {
        0% { transform: translateY(-100vh); }
        100% { transform: translateY(100vh); }
      }

      @keyframes flicker {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.8; }
      }

      @keyframes noise {
        0%, 100% { transform: translate(0, 0); }
        10% { transform: translate(-5%, -5%); }
        20% { transform: translate(-10%, 5%); }
        30% { transform: translate(5%, -10%); }
        40% { transform: translate(-5%, 15%); }
        50% { transform: translate(-10%, 5%); }
        60% { transform: translate(15%, 0%); }
        70% { transform: translate(0%, 15%); }
        80% { transform: translate(-15%, 10%); }
        90% { transform: translate(10%, 5%); }
      }

      .glitch-container {
        position: relative;
        width: 100vw;
        height: 100vh;
        background: #0a0a0a;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .noise-overlay {
        position: absolute;
        top: -50%;
        left: -50%;
        right: -50%;
        bottom: -50%;
        background: 
          repeating-conic-gradient(from 0deg, transparent 0deg, rgba(138, 43, 226, 0.02) 1deg, transparent 2deg),
          repeating-linear-gradient(90deg, transparent, rgba(138, 43, 226, 0.01) 1px, transparent 2px);
        animation: noise 0.2s infinite linear;
        pointer-events: none;
        z-index: 15;
      }

      .scanlines {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: repeating-linear-gradient(
          0deg,
          transparent,
          transparent 2px,
          rgba(138, 43, 226, 0.03) 2px,
          rgba(138, 43, 226, 0.03) 4px
        );
        pointer-events: none;
        z-index: 10;
      }

      .scanlines::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 2px;
        background: linear-gradient(90deg, transparent, #8a2be2, transparent);
        animation: scanline 3s linear infinite;
        opacity: 0.6;
      }

      .glitch-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: 
          radial-gradient(circle at 20% 80%, rgba(138, 43, 226, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(75, 0, 130, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(147, 112, 219, 0.05) 0%, transparent 70%);
        pointer-events: none;
        z-index: 5;
        animation: flicker 4s ease-in-out infinite alternate;
      }
            
      .shape-container {
        position: absolute;
        perspective: 2000px;
        perspective-origin: center center;
        width: 300px;
        height: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
      }

      /* CUBE STYLES */
      .cube {
        position: relative;
        transform-style: preserve-3d;
      }

      .main-cube {
        width: 150px;
        height: 150px;
        transform-origin: 75px 75px 0;
      }

      .small-cube {
        width: 80px;
        height: 80px;
        transform-origin: 40px 40px 0;
      }

      .large-cube {
        width: 200px;
        height: 200px;
        transform-origin: 100px 100px 0;
      }

      .side {
        position: absolute;
        border: 2px solid rgba(138, 43, 226, 0.5);
        opacity: 0.9;
      }

      .main-cube .side {
        width: 150px;
        height: 150px;
      }

      .small-cube .side {
        width: 80px;
        height: 80px;
      }

      .large-cube .side {
        width: 200px;
        height: 200px;
      }

      .main-cube .front { background: linear-gradient(45deg, #8a2be2, #9932cc); transform: rotateY(0deg) translateZ(75px); }
      .main-cube .back { background: linear-gradient(45deg, #663399, #7b68ee); transform: rotateY(180deg) translateZ(75px); }
      .main-cube .right { background: linear-gradient(45deg, #4b0082, #6a0dad); transform: rotateY(90deg) translateZ(75px); }
      .main-cube .left { background: linear-gradient(45deg, #5d478b, #8b008b); transform: rotateY(-90deg) translateZ(75px); }
      .main-cube .top { background: linear-gradient(45deg, #9370db, #ba55d3); transform: rotateX(90deg) translateZ(75px); }
      .main-cube .bottom { background: linear-gradient(45deg, #6b46c1, #a855f7); transform: rotateX(-90deg) translateZ(75px); }

      .small-cube .front { background: linear-gradient(45deg, #ff00ff, #8a2be2); transform: rotateY(0deg) translateZ(40px); }
      .small-cube .back { background: linear-gradient(45deg, #4b0082, #663399); transform: rotateY(180deg) translateZ(40px); }
      .small-cube .right { background: linear-gradient(45deg, #9932cc, #6a0dad); transform: rotateY(90deg) translateZ(40px); }
      .small-cube .left { background: linear-gradient(45deg, #8b008b, #5d478b); transform: rotateY(-90deg) translateZ(40px); }
      .small-cube .top { background: linear-gradient(45deg, #ba55d3, #9370db); transform: rotateX(90deg) translateZ(40px); }
      .small-cube .bottom { background: linear-gradient(45deg, #a855f7, #6b46c1); transform: rotateX(-90deg) translateZ(40px); }

      .large-cube .front { background: linear-gradient(45deg, #2e0854, #8a2be2); transform: rotateY(0deg) translateZ(100px); }
      .large-cube .back { background: linear-gradient(45deg, #1a0033, #663399); transform: rotateY(180deg) translateZ(100px); }
      .large-cube .right { background: linear-gradient(45deg, #4b0082, #2e0854); transform: rotateY(90deg) translateZ(100px); }
      .large-cube .left { background: linear-gradient(45deg, #8b008b, #1a0033); transform: rotateY(-90deg) translateZ(100px); }
      .large-cube .top { background: linear-gradient(45deg, #9370db, #4b0082); transform: rotateX(90deg) translateZ(100px); }
      .large-cube .bottom { background: linear-gradient(45deg, #6b46c1, #2e0854); transform: rotateX(-90deg) translateZ(100px); }

      /* PYRAMID STYLES */
      .pyramid {
        position: relative;
        width: 120px;
        height: 120px;
        transform-style: preserve-3d;
        transform-origin: 60px 60px 0;
      }

      .small-pyramid {
        width: 80px;
        height: 80px;
        transform-origin: 40px 40px 0;
      }

      .pyramid-face {
        position: absolute;
        width: 0;
        height: 0;
        border-style: solid;
      }

      .pyramid .front {
        border-left: 60px solid transparent;
        border-right: 60px solid transparent;
        border-bottom: 104px solid #8a2be2;
        transform: rotateX(-30deg) translateZ(35px);
      }

      .pyramid .back {
        border-left: 60px solid transparent;
        border-right: 60px solid transparent;
        border-bottom: 104px solid #663399;
        transform: rotateX(-30deg) rotateY(180deg) translateZ(35px);
      }

      .pyramid .left {
        border-left: 60px solid transparent;
        border-right: 60px solid transparent;
        border-bottom: 104px solid #4b0082;
        transform: rotateX(-30deg) rotateY(-90deg) translateZ(35px);
      }

      .pyramid .right {
        border-left: 60px solid transparent;
        border-right: 60px solid transparent;
        border-bottom: 104px solid #9932cc;
        transform: rotateX(-30deg) rotateY(90deg) translateZ(35px);
      }

      .pyramid-base {
        position: absolute;
        width: 120px;
        height: 120px;
        background: linear-gradient(45deg, #5d478b, #8b008b);
        transform: rotateX(90deg) translateZ(-35px);
      }

      .small-pyramid .pyramid-face {
        border-left-width: 40px;
        border-right-width: 40px;
        border-bottom-width: 69px;
      }

      .small-pyramid .pyramid-base {
        width: 80px;
        height: 80px;
      }

      /* OCTAHEDRON STYLES */
      .octahedron {
        position: relative;
        width: 100px;
        height: 100px;
        transform-style: preserve-3d;
        transform-origin: 50px 50px 0;
      }

      .octa-face {
        position: absolute;
        width: 0;
        height: 0;
        border-left: 50px solid transparent;
        border-right: 50px solid transparent;
      }

      .face1 { border-bottom: 50px solid #8a2be2; transform: rotateY(0deg) rotateX(45deg) translateZ(35px); }
      .face2 { border-bottom: 50px solid #9932cc; transform: rotateY(90deg) rotateX(45deg) translateZ(35px); }
      .face3 { border-bottom: 50px solid #663399; transform: rotateY(180deg) rotateX(45deg) translateZ(35px); }
      .face4 { border-bottom: 50px solid #4b0082; transform: rotateY(270deg) rotateX(45deg) translateZ(35px); }
      .face5 { border-top: 50px solid #9370db; transform: rotateY(0deg) rotateX(-45deg) translateZ(35px); }
      .face6 { border-top: 50px solid #ba55d3; transform: rotateY(90deg) rotateX(-45deg) translateZ(35px); }
      .face7 { border-top: 50px solid #6b46c1; transform: rotateY(180deg) rotateX(-45deg) translateZ(35px); }
      .face8 { border-top: 50px solid #a855f7; transform: rotateY(270deg) rotateX(-45deg) translateZ(35px); }

      /* Glitch effects on all shapes */
      .side::before, .pyramid-face::before, .octa-face::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: repeating-linear-gradient(
          90deg,
          transparent,
          transparent 2px,
          rgba(255, 255, 255, 0.05) 2px,
          rgba(255, 255, 255, 0.05) 4px
        );
        animation: flicker 3s ease-in-out infinite alternate;
      }
    `}</style>
  );
}
