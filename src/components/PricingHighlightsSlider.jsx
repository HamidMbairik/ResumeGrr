import { motion } from "framer-motion";

const pricingHighlights = [
  { text: "AI-Powered Resume Creation 🤖" },
  { text: "Premium Templates 💎" },
  { text: "Unlimited Resume Exports 📄" },
  { text: "ATS-Friendly Layouts ✅" },
  { text: "Save Hours of Work ⏱️" },
];

const accentColor = "255,255,255"; // white glow/accent for contrast on dark bg

const PricingHighlightsSlider = () => {
  const loopedHighlights = [...pricingHighlights, ...pricingHighlights];

  return (
    <section
      className="relative w-full py-24 overflow-hidden"
      style={{
        background: "linear-gradient(90deg, #2563eb, #4f46e5)",
        padding: "1rem 0", // dark gradient
      }}
    >
      <h2
        className="text-5xl md:text-6xl font-extrabold text-center mb-16 leading-tight"
        style={{
          fontFamily: "Inter, sans-serif",
          color: "#fef3c7", // light text for contrast
          textShadow: '0 0 20px rgba(255,243,199,0.4), 0 0 40px rgba(255,243,199,0.3)',
        }}
      >
        Why Upgrade to Premium !?
      </h2>

      <div className="flex overflow-hidden">
        <motion.div
          className="flex gap-8 px-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          {loopedHighlights.map((highlight, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-6 py-6 relative border shadow-xl flex justify-center items-center"
              style={{
                borderRadius: "1.5rem",
                border: `1.5px solid rgba(${accentColor},0.3)`,
                minWidth: "280px",
                maxWidth: "320px",
                boxShadow: `rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset`,
                textAlign: "center",
                marginBottom: "1rem",
                marginTop: "2rem",
                marginRight: "3rem",
                backgroundColor: "rgba(255,255,255,0.1)", // semi-transparent card for dark bg
                backdropFilter: "blur(8px)",
              }}
            >
              {/* Glowing background */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "1.5rem",
                  background: `radial-gradient(circle, rgba(${accentColor},0.2) 0%, transparent 70%)`,
                  pointerEvents: "none",
                  filter: "blur(40px)",
                  zIndex: 0,
                }}
              ></div>

              {/* Highlight content */}
              <p
                className="relative z-10 flex justify-center items-center"
                style={{
                  padding: "1rem",
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 500,
                  fontSize: "1.1rem",
                  color: "#fef3c7", // light text
                  margin: 0,
                }}
              >
                {highlight.text}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingHighlightsSlider;
