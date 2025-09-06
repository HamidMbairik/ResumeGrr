import { useState, useEffect } from "react";
import heroImg from "../assets/hero-img.png";

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });
  const [color, setColor] = useState("37,99,235");

  const phrases = ["Get Hired Faster", "Easy to Make", "Stand Out", "AI-Powered", "Save Hours"];
  const [currentPhrase, setCurrentPhrase] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Mouse movement for glow
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });

    const r = Math.min(255, Math.floor((x / rect.width) * 255));
    const g = 99;
    const b = Math.min(255, Math.floor((y / rect.height) * 255));
    setColor(`${r},${g},${b}`);
  };

  // Typing effect
  useEffect(() => {
    let timeout;
    const fullText = phrases[phraseIndex];

    if (!deleting) {
      if (charIndex < fullText.length) {
        timeout = setTimeout(() => setCharIndex(charIndex + 1), 120);
      } else {
        timeout = setTimeout(() => setDeleting(true), 1000);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => setCharIndex(charIndex - 1), 40);
      } else {
        setDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        timeout = setTimeout(() => {}, 500);
      }
    }

    setCurrentPhrase(fullText.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, phraseIndex, phrases]);

  // Glow circle smooth follow
  useEffect(() => {
    const id = setInterval(() => {
      setGlowPos((prev) => ({
        x: prev.x + (mousePos.x - prev.x) * 0.25,
        y: prev.y + (mousePos.y - prev.y) * 0.25,
      }));
    }, 16);
    return () => clearInterval(id);
  }, [mousePos]);

  // Floating circles
  const [circles, setCircles] = useState(
    Array.from({ length: 8 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: 40 + Math.random() * 60,
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

  return (
    <div
      className="h-screen relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', margin: 0,}}
      onMouseMove={handleMouseMove}
    >
      {/* Max-width wrapper to keep content away from edges */}
      <div className="flex items-center justify-between max-w-[1400px] w-full mx-auto px-8 sm:px-16 lg:px-24 h-full" style={{
        padding: '0 55px'
      }}>
        {/* Left Content */}
        <div className="flex flex-col justify-center max-w-lg mr-16 z-10">
          <h1
            className="text-7xl sm:text-8xl font-extrabold mb-6 leading-tight"
            style={{
              fontFamily: 'Inter, sans-serif',
              color: `rgb(${color})`,
              textShadow: `0 0 50px rgba(${color},0.6)`,
            }}
          >
            Create a <span style={{ color: `rgb(${color})`, textShadow: `0 0 60px rgba(${color},0.8)` }}>Job-winning</span> Resume
          </h1>

          <h1
            className="text-5xl sm:text-6xl font-semibold mb-8"
            style={{
              fontFamily: 'Roboto, sans-serif',
              textShadow: `0 0 40px rgba(${color},0.3)`,
              minHeight: '3.5rem',
              color: '#2563eb',
              marginTop: '.5rem',
            }}
          >
            {currentPhrase}
            <span className="animate-blink">|</span>
          </h1>

          <h3
            className="text-2xl text-gray-600 mb-12 leading-relaxed"
            style={{
              fontFamily: 'Roboto, sans-serif',
              textShadow: `0 0 30px rgba(${color},0.3)`,
              fontWeight: '300',
              marginTop: '1rem',
              opacity: '.75'
            }}
          >
            Enter your details and let AI craft a professional resume <br /> and cover for you, save hours of stress and <br /> stand out from the crowd.
          </h3>

          {/* Bouncing arrow / Button */}
          <div className="flex flex-col"
            style={{
              width: '100%',
              marginTop: '3rem',
            }}
          >
            {/* Bouncing arrow */}
            <div className="flex justify-center mb-4">
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '1.5rem',
                  color: `rgb(${color})`,
                  opacity: 0.8,
                  animation: 'bounce 1s infinite',
                }}
              >
                ↓
              </span>
            </div>

            <button
              style={{
                backgroundColor: `rgb(${color})`,
                color: 'white',
                border: 'none',
                padding: '1rem 3.5rem',
                marginTop: '0.5rem',
                borderRadius: '0.75rem',
                fontFamily: 'Inter, sans-serif',
                fontSize: '1.25rem',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.3s ease-in-out',
                boxShadow: `0 0 50px rgba(${color},0.6)`,
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = `0 0 70px rgba(${color},0.8)`;
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = `0 0 50px rgba(${color},0.6)`;
                e.target.style.transform = "scale(1)";
              }}
            >
              Get Hired Faster!
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-end items-center max-w-md h-full z-10" style={{
          width: '40rem'
        }}>
          <img src={heroImg} alt="Hero" className="h-auto max-h-[85%] object-contain" />
        </div>
      </div>

      {/* Glow circle */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '400px',
          height: '400px',
          background: `radial-gradient(circle, rgba(${color},0.4) 0%, transparent 70%)`,
          borderRadius: '50%',
          pointerEvents: 'none',
          transform: `translate(${glowPos.x - 200}px, ${glowPos.y - 200}px)`,
          filter: 'blur(80px)',
          transition: 'transform 0.05s linear',
        }}
      ></div>

      {/* Smooth floating circles */}
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

      <style>
        {`
          .animate-blink {
            display: inline-block;
            animation: blink 1s step-start infinite;
          }
          @keyframes blink { 50% { opacity: 0; } }

          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-10px); }
            60% { transform: translateY(-5px); }
          }
        `}
      </style>
    </div>
  );
};

export default Hero;
