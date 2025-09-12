import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqItems = [
  {
    question: "Can I create a resume for free?",
    answer:
      "Yes! The Starter plan is completely free and allows you to create basic resumes easily.",
  },
  {
    question: "What makes Premium different?",
    answer:
      "Premium includes access to stylish templates and more customization options without AI assistance.",
  },
  {
    question: "How does Premium+ work?",
    answer:
      "Premium+ gives you everything in Premium plus AI-powered resume suggestions to stand out faster.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Absolutely! We prioritize your privacy and all data is encrypted and never shared.",
  },
];

const accentColor = "37,99,235"; // Hero accent

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      className="relative w-full py-24 overflow-hidden"
      style={{
        padding: '7rem 0',
        //background: "linear-gradient(135deg, #f3f4f6 0%, #e0e7ff 100%)",
      }}
    >
      {/* Section Title */}
      <h2
        className="text-6xl md:text-7xl font-extrabold text-center mb-20 leading-tight"
        style={{
            marginBottom: '3rem',
            fontSize: '4rem', // Increased from 3.5rem
            fontWeight: 700,
            letterSpacing: '-5px',
            fontFamily: 'Inter, sans-serif',
            color: '#2563eb',
            textShadow: '0 0 20px rgba(37,99,235,0.4), 0 0 40px rgba(37,99,235,0.3)', // subtle glow
          }}
      >
        Frequently Asked Questions
      </h2>

      <div className="max-w-4xl mx-auto flex flex-col gap-8 px-4">
        {faqItems.map((item, idx) => (
          <div key={idx} className="relative">
            {/* Question as label/button */}
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full text-left py-6 px-6 rounded-xl shadow-xl border border-[rgba(37,99,235,0.3)] flex justify-between items-center font-semibold text-2xl md:text-3xl"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 800,
                fontSize: "1,5rem",
                textShadow: '0 0 20px rgba(37,99,235,0.4), 0 0 40px rgba(37,99,235,0.3)',
                color: "#111827",
                backgroundColor: "#fff",
                cursor: "pointer",
                transition: "all 0.3s ease",
                padding: "0 2rem",
                boxShadow: openIndex === idx ? `0 8px 30px rgba(${accentColor}, 0.3)` : '0 4px 12px rgba(0,0,0,0.1)',
              }}
            >
              {item.question}
              <span
                style={{
                  fontSize: "2.5rem",
                  color: `rgb(${accentColor})`,
                  transform: openIndex === idx ? "rotate(45deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
              >
                +
              </span>
            </button>

            {/* Answer with slide down animation */}
            <AnimatePresence>
              {openIndex === idx && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="px-6 py-5 bg-white rounded-b-xl border-l border-r border-b border-[rgba(37,99,235,0.3)] shadow-inner text-gray-700"
                  style={{ fontFamily: "Roboto, sans-serif", fontSize: "1.2rem", fontWeight: 400, padding: '0 2rem' }}
                >
                  {item.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
