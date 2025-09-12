// src/components/HeroMobile.jsx
import { useState, useEffect } from "react";
import heroImg from "../assets/hero-img.png"; // Ensure you have an appropriate image in assets

// Typewriter phrases
const PHRASES = [
  "And Get Hired Faster !",
  "That Is Easy to Make !",
  "And Stand Out !",
  "That Is AI-Powered !",
  "And Save Hours !",
];

const HeroMobile = () => {
  // ---------- State ----------
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });
  const [color, setColor] = useState("37,99,235"); // RGB color
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // ---------- Typewriter speeds ----------
  const TYPING_SPEED = 80;
  const DELETING_SPEED = 40;
  const PAUSE_BEFORE_DELETING = 1000;
  const PAUSE_AFTER_DELETING = 300;
  const SPEED_VARIANCE = 40;

  // ---------- Mouse movement for glow ----------
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });

    // Calculate RGB color dynamically
    const r = Math.min(255, Math.floor((x / rect.width) * 255));
    const g = 99;
    const b = Math.min(255, Math.floor((y / rect.height) * 255));
    setColor(`${r},${g},${b}`);
  };

  // ---------- Smooth glow follow ----------
  useEffect(() => {
    const id = setInterval(() => {
      setGlowPos((prev) => ({
        x: prev.x + (mousePos.x - prev.x) * 0.25,
        y: prev.y + (mousePos.y - prev.y) * 0.25,
      }));
    }, 16); // ~60fps
    return () => clearInterval(id);
  }, [mousePos]);

  // ---------- Floating circles ----------
  const [circles, setCircles] = useState(
    Array.from({ length: 8 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: 30 + Math.random() * 40,
      targetX: Math.random() * window.innerWidth,
      targetY: Math.random() * window.innerHeight,
      speed: 0.02 + Math.random() * 0.03,
    }))
  );

  useEffect(() => {
    let animationFrame;
    const animate = () => {
      setCircles((prev) =>
        prev.map((c) => {
          let dx = c.targetX - c.x;
          let dy = c.targetY - c.y;
          let nx = c.x + dx * c.speed;
          let ny = c.y + dy * c.speed;
          if (Math.abs(dx) < 1 && Math.abs(dy) < 1) {
            return {
              ...c,
              targetX: Math.random() * window.innerWidth,
              targetY: Math.random() * window.innerHeight,
              x: nx,
              y: ny,
            };
          }
          return { ...c, x: nx, y: ny };
        })
      );
      animationFrame = requestAnimationFrame(animate);
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // ---------- Typewriter effect ----------
  useEffect(() => {
    const currentPhrase = PHRASES[currentPhraseIndex];
    let timeoutId;

    const rand = (base) => base + Math.floor(Math.random() * SPEED_VARIANCE);

    if (!isDeleting) {
      if (displayText === currentPhrase) {
        timeoutId = setTimeout(() => setIsDeleting(true), PAUSE_BEFORE_DELETING);
      } else {
        const next = currentPhrase.slice(0, displayText.length + 1);
        timeoutId = setTimeout(() => setDisplayText(next), rand(TYPING_SPEED));
      }
    } else {
      if (displayText === "") {
        timeoutId = setTimeout(() => {
          setIsDeleting(false);
          setCurrentPhraseIndex((i) => (i + 1) % PHRASES.length);
        }, PAUSE_AFTER_DELETING);
      } else {
        const next = currentPhrase.slice(0, displayText.length - 1);
        timeoutId = setTimeout(() => setDisplayText(next), rand(DELETING_SPEED));
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, isDeleting, currentPhraseIndex]);

  // ---------- Render ----------
  return (
    <div
      className="flex justify-between items-center h-screen relative overflow-hidden"
      onMouseMove={handleMouseMove}
      style={{
        padding: '0 3rem',
      }}
    >
      {/* Mobile layout container */}
      <div className="flex flex-col items-center justify-center w-full h-full px-6 text-center">
        {/* Title */}
        <h1
          className="text-4xl font-extrabold mb-4 leading-snug"
          style={{ color: `rgb(${color})`, textShadow: `0 0 30px rgba(${color},0.6)`, marginBottom: '1rem' }}
        >
          Create a <span style={{ textShadow: `0 0 40px rgba(${color},0.8)` }}>Job-winning</span> Resume
        </h1>

        {/* Typewriter */}
        <h2
          className="text-2xl font-semibold mb-6 min-h-[2.5rem]"
          style={{ color: "#2563eb", textShadow: `0 0 20px rgba(${color},0.3)`, paddingBottom: '1rem' }}
          aria-live="polite"
        >
          {displayText}
          <span
            className="inline-block w-1 h-6 ml-2"
            style={{
              backgroundColor: `rgb(${color})`,
              animation: "blink 1s steps(2, start) infinite",
            }}
            aria-hidden="true"
          />
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 mb-6" style={{
          fontFamily: "Roboto, sans-serif",
          textShadow: `0 0 30px rgba(${color},0.3)`,
          fontWeight: "300",
          marginTop: "1rem",
          opacity: ".75",
        }}>
          Enter your details and let AI craft a professional resume <br />
          and cover for you, save hours of stress and <br />
          stand out from the crowd.
        </p>

        {/* CTA Button */}
        <button
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium text-lg shadow-lg hover:shadow-xl transition-all"
          style={{
            backgroundColor: `rgb(${color})`,
                color: "white",
                border: "none",
                padding: "1rem 3.5rem",
                marginTop: "0.5rem",
                marginBottom: '1rem',
                borderRadius: "0.75rem",
                fontFamily: "Inter, sans-serif",
                fontSize: "1.25rem",
                fontWeight: "500",
                cursor: "pointer",
                transition: "all 0.3s ease-in-out",
                boxShadow: `0 0 50px rgba(${color},0.6)`,
          }}
        >
          Get Hired Faster!
        </button>

        {/* Image */}
        <img src={heroImg} alt="Hero" className="w-4/4 h-auto mt-6" style={{
          marginTop: '2rem',
        }} />
      </div>

      {/* Glow effect */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "300px",
          height: "300px",
          background: `radial-gradient(circle, rgba(${color},0.4) 0%, transparent 70%)`,
          borderRadius: "50%",
          pointerEvents: "none",
          transform: `translate(${glowPos.x - 150}px, ${glowPos.y - 150}px)`,
          filter: "blur(60px)",
          transition: "transform 0.05s linear",
        }}
      ></div>

      {/* Floating circles */}
      {circles.map((c, i) => (
        <div
          key={i}
          className="absolute rounded-full opacity-20"
          style={{
            width: `${c.size}px`,
            height: `${c.size}px`,
            top: `${c.y}px`,
            left: `${c.x}px`,
            backgroundColor: `rgba(${color},0.2)`,
          }}
        ></div>
      ))}

      {/* Animations */}
      <style>
        {`
          @keyframes blink {
            0%,50%,100% { opacity: 1; }
            25%,75% { opacity: 0; }
          }
        `}
      </style>
    </div>
  );
};

export default HeroMobile;
