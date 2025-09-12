// src/components/Pricing.jsx
import React from 'react';

const pricingPlans = [
  {
    title: 'Starter',
    price: 'Free',
    features: ['Limited Templates', 'Basic Resume Layouts'],
    emoji: '🚀',
    isCenter: false,
  },
  {
    title: 'Premium',
    price: '$4.99',
    features: ['Premium Templates', 'Manual Resume Creation'],
    emoji: '💎',
    isCenter: true, // Center plan slightly bigger
  },
  {
    title: 'Premium+',
    price: '$9.99',
    features: ['All Premium Features', 'AI-Powered Resume Creation'],
    emoji: '🤖',
    isCenter: false,
  },
];

const accentColor = '#2563eb';

const PricingMobile = () => {
  return (
    <section
      style={{
        padding: '4rem 1rem',
        //background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        color: '#18181b',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
        <h2
          style={{
            marginBottom: '3rem',
            fontSize: '4rem',
            fontWeight: 700,
            letterSpacing: '-5px',
            fontFamily: 'Inter, sans-serif',
            color: accentColor,
            textShadow: '0 0 20px rgba(37,99,235,0.4), 0 0 40px rgba(37,99,235,0.3)',
          }}
        >
          Pricing
        </h2>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem',
            justifyContent: 'center',
          }}
        >
          {pricingPlans.map((plan, idx) => (
            <div
              key={idx}
              style={{
                background: '#fff',
                borderRadius: 16,
                boxShadow: `0 4px 24px rgba(0,0,0,0.08)`,
                padding: '2rem',
                flex: plan.isCenter ? '1 1 320px' : '1 1 250px', // bigger center card
                minWidth: plan.isCenter ? 320 : 250,
                maxWidth: plan.isCenter ? 340 : 300,
                border: `1.5px solid ${accentColor}`,
                transition: 'transform 0.3s, box-shadow 0.3s',
                fontFamily: 'Roboto, sans-serif',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = `0 8px 32px rgba(37,99,235,0.2)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = `0 4px 24px rgba(0,0,0,0.08)`;
              }}
            >
              {plan.isCenter && (
                <span
                  style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: accentColor,
                    color: '#fff',
                    fontWeight: 'bold',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '999px',
                    fontSize: '0.85rem',
                  }}
                >
                  Most Popular
                </span>
              )}

              <div
                style={{
                  fontSize: '2.5rem',
                  marginBottom: '1rem',
                  textAlign: 'center',
                }}
              >
                {plan.emoji}
              </div>

              <h3
                style={{
                  marginBottom: '1rem',
                  fontWeight: 700,
                  fontSize: '1.5rem',
                  color: '#111827',
                  fontFamily: 'Inter, sans-serif',
                  textAlign: 'center',
                  textShadow: '#2563eb 1px 0 10px',
                }}
              >
                {plan.title}
              </h3>

              <p
                style={{
                  textAlign: 'center',
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  color: accentColor,
                  marginBottom: '1.5rem',
                }}
              >
                {plan.price}
                {plan.price !== 'Free' && <span className="text-xl font-medium">/mo</span>}
              </p>

              <ul style={{ marginBottom: '2rem', listStyle: 'none', padding: 0 }}>
                {plan.features.map((f, i) => (
                  <li
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginBottom: '0.75rem',
                    }}
                  >
                    <span
                      style={{
                        display: 'inline-block',
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        backgroundColor: accentColor,
                        marginTop: '0.4rem',
                      }}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                style={{
                  backgroundColor: accentColor,
                  color: '#fff',
                  border: 'none',
                  padding: '1rem 2.5rem',
                  borderRadius: '0.75rem',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  width: '100%',
                  transition: 'all 0.3s ease-in-out',
                  boxShadow: `0 0 30px rgba(37,99,235,0.4)`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 50px rgba(37,99,235,0.6)`;
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 30px rgba(37,99,235,0.4)`;
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingMobile;
