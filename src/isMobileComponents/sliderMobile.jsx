import { motion } from "framer-motion"

const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    text: "ResumeGrr helped me land my first interview in just a week! Super easy to use and professional.",
    rating: 5,
  },
  {
    id: 2,
    name: "James P.",
    text: "The AI suggestions are a game changer. My resume looks polished and stands out now.",
    rating: 5,
  },
  {
    id: 3,
    name: "Amina T.",
    text: "I never thought creating a resume could be this fun. Clean design and fast process.",
    rating: 4,
  },
  {
    id: 4,
    name: "Leo G.",
    text: "Got hired within two weeks! The templates are stylish and ATS-friendly.",
    rating: 5,
  },
  {
    id: 5,
    name: "Maya K.",
    text: "ResumeGrr is the best tool I’ve used for job hunting. Highly recommend it!",
    rating: 5,
  },
]

const renderStars = (count) => "⭐".repeat(count)
const accentColor = "37,99,235" // same as hero section

const ReviewsSectionMobile = () => {
  const loopedReviews = [...reviews, ...reviews]

  return (
    <section
      id="reviews"
      className="relative w-full py-24 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white"
      style={{ 
        scrollMarginTop: "80px",
        width: "100%",
        //background: "linear-gradient(135deg, #f3f4f6 0%, #e0e7ff 100%)",
      }} // to offset fixed navbar
    >
      {/* Section Title with glow like Features */}
      <h2
        className="text-5xl md:text-6xl font-extrabold text-center mb-16 leading-tight"
        style={{
          marginBottom: '3rem',
          fontSize: '4rem', // Increased from 3.5rem
          fontWeight: 700,
          textAlign: 'center',
          letterSpacing: '-5px',
          fontFamily: 'Inter, sans-serif',
          color: '#2563eb',
          textShadow: '0 0 20px rgba(37,99,235,0.4), 0 0 40px rgba(37,99,235,0.3)', // subtle glow
        }}
      >
        "What Our Users Say"
      </h2>

      {/* Slider */}
      <div className="flex overflow-hidden">
        <motion.div
          className="flex gap-8 px-8"
          animate={{ x: ["0%", "-50%"] }}
          style={{
            display: "flex",
            gap: "2rem",
            paddingBottom: "4rem",
            willChange: "transform",
          }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        >
          {loopedReviews.map((review, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-4 py-6 bg-white relative border shadow-xl"
              style={{
                borderRadius: "1.5rem",
                border: `1.5px solid rgba(${accentColor},0.3)`,
                minWidth: "300px",
                maxWidth: "350px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                textAlign: "center",
                padding: "1.5rem",
                marginBottom: "1rem",
                marginTop: "2rem",
              }}
            >
              {/* Glowing background effect */}
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

              {/* Comment content */}
              <p
                style={{
                  position: "relative",
                  zIndex: 1,
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 400,
                  fontSize: "1rem",
                  color: "#1f2937",
                  marginBottom: "1rem",
                }}
              >
                “{review.text}”
              </p>

              <p
                style={{
                  position: "relative",
                  zIndex: 1,
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  color: `rgb(${accentColor})`,
                }}
              >
                {review.name} &nbsp; {renderStars(review.rating)}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ReviewsSectionMobile
