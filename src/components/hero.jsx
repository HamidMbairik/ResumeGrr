import { useState, useEffect } from "react";

const Hero = () => {
  // ------------------------------
  // State for mouse position & glow effect
  // ------------------------------
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });
  const [color, setColor] = useState("37,99,235"); // Initial RGB color for glow & dynamic text

  // ------------------------------
  // Typing effect state
  // ------------------------------
  const phrases = ["Get Hired Faster", "Easy to Make", "Stand Out", "AI-Powered", "Save Hours"];
  const [currentPhrase, setCurrentPhrase] = useState(""); // Currently displayed characters
  const [phraseIndex, setPhraseIndex] = useState(0); // Which phrase we are on
  const [charIndex, setCharIndex] = useState(0); // Which character index we are at
  const [deleting, setDeleting] = useState(false); // Whether we are deleting or typing

  // ------------------------------
  // Mouse movement handler
  // Updates cursor position and dynamic color
  // ------------------------------
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePos({ x, y });

    // Change RGB color dynamically based on cursor position
    const r = Math.min(255, Math.floor((x / rect.width) * 255));
    const g = 99;
    const b = Math.min(255, Math.floor((y / rect.height) * 255));
    setColor(`${r},${g},${b}`);
  };

  // ------------------------------
  // Glow effect follows cursor smoothly
  // ------------------------------
  useEffect(() => {
    const id = setInterval(() => {
      setGlowPos((prev) => ({
        x: prev.x + (mousePos.x - prev.x) * 0.25, // faster follow
        y: prev.y + (mousePos.y - prev.y) * 0.25,
      }));
    }, 16); // roughly 60fps
    return () => clearInterval(id);
  }, [mousePos]);

  // ------------------------------
  // Typing effect logic
  // ------------------------------
  useEffect(() => {
    const typingSpeed = deleting ? 40 : 80; // faster typing
    const pauseAfterComplete = 300; // shorter pause after word completes

    const timeout = setTimeout(() => {
      const fullText = phrases[phraseIndex];

      if (!deleting) {
        // Add next character
        setCurrentPhrase(fullText.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        // When phrase completes, start deleting after a short pause
        if (charIndex + 1 === fullText.length) {
          setTimeout(() => setDeleting(true), pauseAfterComplete);
        }
      } else {
        // Remove characters when deleting
        setCurrentPhrase(fullText.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        // Once deleted completely, move to next phrase
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, phraseIndex, phrases]);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen px-4 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        position: 'relative',
      }}
      onMouseMove={handleMouseMove}
    >
      {/* ------------------------------
          Glow circle that follows the cursor
          ------------------------------ */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '400px',
          height: '400px',
          background: `radial-gradient(circle, rgba(${color},0.4) 0%, transparent 70%)`,
          borderRadius: '50%',
          pointerEvents: 'none', // so it doesn't block clicks
          transform: `translate(${glowPos.x - 200}px, ${glowPos.y - 200}px)`,
          filter: 'blur(80px)', // smooth glow
          transition: 'transform 0.05s linear',
        }}
      ></div>

      {/* ------------------------------
          Static heading
          ------------------------------ */}
      <h1
        className="text-8xl sm:text-9xl font-extrabold text-gray-800 mb-4 text-center leading-tight relative z-10"
        style={{
          fontFamily: 'Inter, sans-serif',
          lineHeight: '1.2',
          textShadow: `0 0 40px rgba(${color},0.6)`,
        }}
      >
        Create a <span style={{ color: `rgb(${color})`, textShadow: `0 0 50px rgba(${color},0.8)` }}>Job-winning</span> Resume
      </h1>

      {/* ------------------------------
          Dynamic typing line
          ------------------------------ */}
      <h2
        className="text-5xl sm:text-6xl font-semibold text-gray-700 mb-8 text-center relative z-10"
        style={{
          fontFamily: 'Roboto, sans-serif',
          textShadow: `0 0 30px rgba(${color},0.3)`,
          minHeight: '3rem', // prevents layout shift
          color: `rgb(${color})`, // match Job-winning color
        }}
      >
        {currentPhrase}
        <span className="animate-blink">|</span>
      </h2>

      {/* ------------------------------
          Description paragraph
          ------------------------------ */}
      <p
        className="text-4xl text-gray-600 mb-8 text-center max-w-4xl leading-relaxed relative z-10"
        style={{
          fontFamily: 'Roboto, sans-serif',
          textShadow: `0 0 30px rgba(${color},0.3)`,
        }}
      >
        Enter your details and let AI craft a professional resume <br /> and cover for you, save hours of stress and <br /> stand out from the crowd.
      </p>

      {/* ------------------------------
          Button with glow effect
          ------------------------------ */}
      <button
        style={{
          backgroundColor: `rgb(${color})`,
          color: 'white',
          border: 'none',
          padding: '0.75rem 2rem',
          borderRadius: '0.5rem',
          fontFamily: 'Inter, sans-serif',
          fontSize: '1.125rem',
          fontWeight: '500',
          cursor: 'pointer',
          transition: 'all 0.3s ease-in-out',
          boxShadow: `0 0 40px rgba(${color},0.6)`,
          position: 'relative',
          zIndex: 10,
        }}
        onMouseEnter={(e) => {
          e.target.style.boxShadow = `0 0 60px rgba(${color},0.8)`;
        }}
        onMouseLeave={(e) => {
          e.target.style.boxShadow = `0 0 40px rgba(${color},0.6)`;
        }}
      >
        Get Started
      </button>

      {/* ------------------------------
          Blinking cursor for typing effect
          ------------------------------ */}
      <style>
        {`
          .animate-blink {
            display: inline-block;
            animation: blink 1s step-start infinite;
          }
          @keyframes blink {
            50% { opacity: 0; }
          }
        `}
      </style>
    </div>
  );
};

export default Hero;
