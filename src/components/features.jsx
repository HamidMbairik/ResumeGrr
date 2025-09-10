import React from 'react';

const features = [
  {
    title: 'AI Resume Suggestions',
    description: 'Get smart recommendations to make your resume stand out and catch recruiters’ attention.',
    icon: '🤖',
  },
  {
    title: 'Time-Saving',
    description: 'Automatically generate professional resumes in minutes, saving you hours of effort.',
    icon: '⏱️',
  },
  {
    title: 'Professional Formatting',
    description: 'Create resumes with polished layouts and formatting that impress hiring managers.',
    icon: '📄',
  },
  {
    title: 'Customizable Templates',
    description: 'Easily personalize templates to match your style and career goals.',
    icon: '🎨',
  },
];

const accentColor = '#2563eb'; // Hero accent color

const glowTitleStyle = {
  fontFamily: 'Inter, sans-serif',
  fontSize: '4rem',
  fontWeight: 800,
  color: `rgb(${accentColor})`,
  textShadow: `0 0 20px rgba(37,99,235,0.6), 0 0 40px rgba(37,99,235,0.3)`,
  marginBottom: '3rem',
};

const Features = () => {
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
            fontSize: '6rem', // Increased from 3.5rem
            fontWeight: 700,
            letterSpacing: '-5px',
            fontFamily: 'Inter, sans-serif',
            color: '#2563eb',
            textShadow: '0 0 20px rgba(37,99,235,0.4), 0 0 40px rgba(37,99,235,0.3)', // subtle glow
          }}
        >
          Features
        </h2>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
          justifyContent: 'center',
        }}>
          {features.map((feature, idx) => (
            <div key={idx} style={{
              background: '#fff',
              borderRadius: 16,
              boxShadow: `0 4px 24px rgba(0,0,0,0.08)`,
              padding: '2rem',
              flex: '1 1 250px',
              minWidth: 250,
              maxWidth: 300,
              border: `1.5px solid ${accentColor}`,
              transition: 'transform 0.3s, box-shadow 0.3s',
              fontFamily: 'Roboto, sans-serif',
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
              <div style={{
                fontSize: '2.5rem',
                marginBottom: '1rem',
                color: accentColor,
              }}>
                {feature.icon}
              </div>
              <h3 style={{
                marginBottom: '0.5rem',
                fontWeight: 600,
                fontSize: '1.25rem',
                color: '#111827',
              }}>
                {feature.title}
              </h3>
              <p style={{ color: '#4b5563' }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
