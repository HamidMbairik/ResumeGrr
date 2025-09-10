import React, { useState } from "react";
import html2pdf from "html2pdf.js/dist/html2pdf.bundle";

const accentColor = "37,99,235";

const TryItSection = () => {
  // Form state
  const [info, setInfo] = useState({
    name: "",
    title: "",
    email: "",
    phone: "",
    summary: "",
    skills: "",
    languages: "",
  });

  // Experience and Education state as arrays
  const [experiences, setExperiences] = useState([""]);
  const [educations, setEducations] = useState([""]);

  // Languages state as array
  const [languages, setLanguages] = useState([""]);

  // Handle input changes
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  // PDF download handler
  const handleDownload = () => {
    const resumeElement = document.getElementById("resume-preview");
    html2pdf().from(resumeElement).save("resume.pdf");
  };

  // Handle dynamic experience/education changes
  const handleExperienceChange = (idx, value) => {
    const updated = [...experiences];
    updated[idx] = value;
    setExperiences(updated);
  };
  const handleEducationChange = (idx, value) => {
    const updated = [...educations];
    updated[idx] = value;
    setEducations(updated);
  };
  const addExperience = () => setExperiences([...experiences, ""]);
  const addEducation = () => setEducations([...educations, ""]);

  // Remove experience/education entry
  const removeExperience = (idx) => {
    setExperiences(experiences.filter((_, i) => i !== idx));
  };
  const removeEducation = (idx) => {
    setEducations(educations.filter((_, i) => i !== idx));
  };

  // Handle dynamic languages changes
  const handleLanguageChange = (idx, value) => {
    const updated = [...languages];
    updated[idx] = value;
    setLanguages(updated);
  };
  const addLanguage = () => setLanguages([...languages, ""]);
  const removeLanguage = (idx) => {
    setLanguages(languages.filter((_, i) => i !== idx));
  };

  return (
    <section
      id="try-it"
      className="relative w-full py-24 overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white"
      style={{
        padding: '4rem 1rem',
        //background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        color: '#18181b',
      }}
    >
      {/* Section Title */}
      <h2
        className="text-5xl md:text-6xl font-extrabold text-center mb-16 leading-tight"
        style={{
          marginBottom: '3rem',
          fontSize: '7rem', // Increased from 3.5rem
          fontWeight: 700,
          letterSpacing: '-5px',
          fontFamily: 'Inter, sans-serif',
          color: '#2563eb',
          textShadow: '0 0 20px rgba(37,99,235,0.4), 0 0 40px rgba(37,99,235,0.3)', // subtle glow
        }}
      >
        Try It Yourself
      </h2>

      {/* Main container: Form (left) and Resume (right) */}
      <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-row justify-between gap-12" style={{
        flexWrap: 'wrap',
        width: '100%',
      }}>
        {/* --- FORM SECTION --- */}
        
        <form
          className="bg-white rounded-3xl border shadow-2xl flex-1 flex flex-col wrap justify-center"
          style={{
            border: `2px solid rgba(${accentColor},0.18)`,
            boxShadow: `0 0 70px rgba(${accentColor},0.18)`,
            fontFamily: "Inter, sans-serif",
            minWidth: 300,
            minHeight: 600,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            padding: "1rem",
            gap: "1.5rem",
            marginRight: '1.5rem',
            borderRadius: '1.5rem',
            background: 'rgba(255, 255, 255, 0.9)',
          }}
        >
          <h3
            className="text-2xl font-bold text-blue-700"
            style={{
              fontFamily: "Inter, sans-serif",
              color: '#2563eb',
              textShadow: '0 0 20px rgba(37,99,235,0.4), 0 0 40px rgba(37,99,235,0.3)',
              fontSize: '1.75rem',
              marginBottom: '1rem',
              textAlign: "center",
            }}
          >
            Enter Your Info
          </h3>

          <div className="flex flex-col gap-6">
            {/* Name + Job Title */}
            <div className="flex gap-4">
              <input
                name="name"
                value={info.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="flex-1 p-4 border rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-lg"
                style={{
                  fontFamily: "Inter, sans-serif",
                  borderColor: `rgba(${accentColor},0.18)`,
                  background: "rgba(245,248,255,0.8)",
                  minHeight: 50,
                  padding: "0.75rem 1rem",
                  marginBottom: 4,
                  marginRight: 4,
                  borderRadius: "1.25rem",
                }}
              />
              <input
                name="title"
                value={info.title}
                onChange={handleChange}
                placeholder="Job Title"
                className="flex-1 p-4 border rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-lg"
                style={{
                  fontFamily: "Inter, sans-serif",
                  borderColor: `rgba(${accentColor},0.18)`,
                  background: "rgba(245,248,255,0.8)",
                  minHeight: 50,
                  padding: "0.75rem 1rem",
                  marginBottom: 4,
                  borderRadius: "1.25rem",
                }}
              />
            </div>

            {/* Professional Summary */}
            <textarea
              name="summary"
              value={info.summary}
              onChange={handleChange}
              placeholder="Professional Summary"
              className="p-4 border rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-lg"
              style={{
                fontFamily: "Inter, sans-serif",
                borderColor: `rgba(${accentColor},0.18)`,
                background: "rgba(245,248,255,0.8)",
                minHeight: 80,
                borderRadius: "1.25rem",
                padding: "1rem",
                marginBottom: 4,
                resize: "vertical",
              }}
            />

            {/* Email + Phone */}
            <div className="flex gap-4">
              <input
                name="email"
                value={info.email}
                onChange={handleChange}
                placeholder="Email"
                className="flex-1 p-4 border rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-lg"
                style={{
                  fontFamily: "Inter, sans-serif",
                  borderColor: `rgba(${accentColor},0.18)`,
                  background: "rgba(245,248,255,0.8)",
                  minHeight: 50,
                  padding: "0.75rem 1rem",
                  marginBottom: 4,
                  marginRight: 4,
                  borderRadius: "1.25rem",
                }}
              />
              <input
                name="phone"
                value={info.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="flex-1 p-4 border rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-lg"
                style={{
                  fontFamily: "Inter, sans-serif",
                  borderColor: `rgba(${accentColor},0.18)`,
                  background: "rgba(245,248,255,0.8)",
                  minHeight: 50,
                  padding: "0.75rem 1rem",
                  marginBottom: 4,
                  borderRadius: "1.25rem",
                }}
              />
            </div>

            {/* Skills */}
            <textarea
              name="skills"
              value={info.skills}
              onChange={handleChange}
              placeholder="Skills (comma separated)"
              className="p-4 border rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-lg"
              style={{
                fontFamily: "Inter, sans-serif",
                borderColor: `rgba(${accentColor},0.18)`,
                background: "rgba(245,248,255,0.8)",
                minHeight: 60,
                borderRadius: "1.25rem",
                padding: "1rem",
                resize: "vertical",
              }}
            />

            {/* Experiences */}
            <div className="flex flex-col gap-3">
              <label style={{ fontWeight: 600 }}>Experiences</label>
              {experiences.map((exp, idx) => (
                <div key={idx} className="flex gap-2 items-start">
                  <textarea
                    value={exp}
                    onChange={e => handleExperienceChange(idx, e.target.value)}
                    placeholder={`Experience #${idx + 1}`}
                    className="flex-1 p-4 border rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-lg"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      borderColor: `rgba(${accentColor},0.18)`,
                      background: "rgba(245,248,255,0.8)",
                      minHeight: 60,
                      borderRadius: "1.25rem",
                      padding: "1rem",
                      resize: "vertical",
                    }}
                  />
                  {experiences.length > 1 && (
                    <button type="button" onClick={() => removeExperience(idx)} style={{ background: "#ef4444", color: "#fff", border: "none", borderRadius: "0.75rem", padding: "0.5rem 0.8rem", fontWeight: 600, cursor: "pointer" }}>Remove</button>
                  )}
                </div>
              ))}
              <button type="button" onClick={addExperience} style={{ marginTop: 4, padding: "0.5rem 1rem", borderRadius: "1rem", background: "#2563eb", color: "#fff", fontWeight: 500, border: "none", cursor: "pointer" }}>+ Add Experience</button>
            </div>

            {/* Education */}
            <div className="flex flex-col gap-3">
              <label style={{ fontWeight: 600 }}>Education</label>
              {educations.map((edu, idx) => (
                <div key={idx} className="flex gap-2 items-start">
                  <textarea
                    value={edu}
                    onChange={e => handleEducationChange(idx, e.target.value)}
                    placeholder={`Education #${idx + 1}`}
                    className="flex-1 p-4 border rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-lg"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      borderColor: `rgba(${accentColor},0.18)`,
                      background: "rgba(245,248,255,0.8)",
                      minHeight: 60,
                      borderRadius: "1.25rem",
                      padding: "1rem",
                      resize: "vertical",
                    }}
                  />
                  {educations.length > 1 && (
                    <button type="button" onClick={() => removeEducation(idx)} style={{ background: "#ef4444", color: "#fff", border: "none", borderRadius: "0.75rem", padding: "0.5rem 0.8rem", fontWeight: 600, cursor: "pointer" }}>Remove</button>
                  )}
                </div>
              ))}
              <button type="button" onClick={addEducation} style={{ marginTop: 4, padding: "0.5rem 1rem", borderRadius: "1rem", background: "#2563eb", color: "#fff", fontWeight: 500, border: "none", cursor: "pointer" }}>+ Add Education</button>
            </div>

            {/* Languages */}
            <div className="flex flex-col gap-3">
              <label style={{ fontWeight: 600 }}>Languages</label>
              {languages.map((lang, idx) => (
                <div key={idx} className="flex gap-2 items-start">
                  <input
                    value={lang}
                    onChange={e => handleLanguageChange(idx, e.target.value)}
                    placeholder={`Language #${idx + 1}`}
                    className="flex-1 p-4 border rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-lg"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      borderColor: `rgba(${accentColor},0.18)`,
                      background: "rgba(245,248,255,0.8)",
                      minHeight: 50,
                      borderRadius: "1.25rem",
                      padding: "1rem",
                    }}
                  />
                  {languages.length > 1 && (
                    <button type="button" onClick={() => removeLanguage(idx)} style={{ background: "#ef4444", color: "#fff", border: "none", borderRadius: "0.75rem", padding: "0.5rem 0.8rem", fontWeight: 600, cursor: "pointer" }}>Remove</button>
                  )}
                </div>
              ))}
              <button type="button" onClick={addLanguage} style={{ marginTop: 4, padding: "0.5rem 1rem", borderRadius: "1rem", background: "#2563eb", color: "#fff", fontWeight: 500, border: "none", cursor: "pointer" }}>+ Add Language</button>
            </div>
          </div>
        </form>


        {/* --- RESUME TEMPLATE SECTION --- */}
        <div
          id="resume-preview"
          className="bg-white rounded-3xl shadow-2xl flex-1 flex flex-col"
          style={{
            boxShadow: `0 0 70px rgba(${accentColor},0.18)`,
            fontFamily: "Inter, sans-serif",
            minWidth: 300,
            maxWidth: 'none',
            minHeight: 600,
            height: "100%",
            borderRadius: '1.5rem',
            position: 'relative',
            background: '#fff', // Only white
            fontSize: '15px',
            lineHeight: '1.7',
            color: '#23272f',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            padding: 0,
            //visibility: 'hidden',
          }}
        >
          {/* SVG Pattern Background */}
          <div style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            pointerEvents: 'none',
            opacity: 0.10,
          }}>
            <svg width="100%" height="100%" viewBox="0 0 600 800" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
              <defs>
                <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="2" fill="#2563eb" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>
          </div>
          {/* --- HEADER TOP --- */}
          <div style={{
            width: '100%',
            padding: '2.5rem 2rem 1.5rem 2rem',
            borderBottom: `2px solid rgba(${accentColor},0.18)`,
            background: '#fff', // Only white
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
          }}>
            <h1 style={{fontSize:'2.2rem',fontWeight:800,letterSpacing:'-1px',marginBottom:8,fontFamily:'Inter, sans-serif',color:'#2563eb',textShadow:'0 0 20px rgba(37,99,235,0.2)'}}>{info.name || "Your Name"}</h1>
            <div style={{fontSize:'1.2rem',fontWeight:600,color:'#2563eb',marginBottom:8,fontFamily:'Inter, sans-serif'}}>{info.title || "Job Title"}</div>
            <div style={{fontSize:'1rem',color:'#4b5563',fontFamily:'Inter, sans-serif',marginBottom:0}}>
              <span>{info.email || "your@email.com"}</span>
              <span style={{margin:'0 8px'}}>|</span>
              <span>{info.phone || "000-000-0000"}</span>
            </div>
          </div>
          {/* --- MAIN CONTENT --- */}
          <div style={{flex:1,position:'relative',zIndex:2,padding:'2.5rem 2rem',display:'flex',flexDirection:'column',gap:'2rem',background:'#fff'}}>
            {/* Profile Section */}
            <div style={{background:'none'}}>
              <h2 style={{color:'#2563eb',fontWeight:700,fontSize:'1.1rem',letterSpacing:'1px',marginBottom:6}}>Profile</h2>
              <p style={{fontSize:'1rem',color:'#23272f',marginBottom:0}}>
                {info.summary || "A short professional summary goes here, highlighting your experience and strengths."}
              </p>
            </div>
            {/* Skills & Languages Section */}
            <div style={{display:'flex',gap:'2rem',background:'none'}}>
              <div style={{flex:1,background:'none'}}>
                <h2 style={{color:'#2563eb',fontWeight:700,fontSize:'1.1rem',letterSpacing:'1px',marginBottom:6}}>Skills</h2>
                <ul style={{margin:0,paddingLeft:'1.2rem',fontSize:'1rem',color:'#23272f'}}>
                  {info.skills
                    ? info.skills.split(",").map((s, i) => (
                        <li key={i}>{s.trim()}</li>
                      ))
                    : ["Skill One", "Skill Two", "Skill Three"].map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                </ul>
              </div>
              <div style={{flex:1,background:'none'}}>
                <h2 style={{color:'#2563eb',fontWeight:700,fontSize:'1.1rem',letterSpacing:'1px',marginBottom:6}}>Languages</h2>
                <ul style={{margin:0,paddingLeft:'1.2rem',fontSize:'1rem',color:'#23272f'}}>
                  {languages.length > 0 && languages.some(l => l.trim())
                    ? languages.filter(l => l.trim()).map((lang, idx) => (
                        <li key={idx}>{lang.trim()}</li>
                      ))
                    : ["English", "French"].map((lang, idx) => (
                        <li key={idx}>{lang}</li>
                      ))}
                </ul>
              </div>
            </div>
            {/* Experience Section */}
            <div style={{background:'none'}}>
              <h2 style={{color:'#2563eb',fontWeight:700,fontSize:'1.1rem',letterSpacing:'1px',marginBottom:6}}>Experience</h2>
              {experiences.map((exp, idx) => (
                <p key={idx} style={{fontSize:'1rem',color:'#23272f',whiteSpace:'pre-line',marginBottom:8}}>
                  {exp || `Job Title at Company\n- Achievement 1\n- Achievement 2`}
                </p>
              ))}
            </div>
            {/* Education Section */}
            <div style={{background:'none'}}>
              <h2 style={{color:'#2563eb',fontWeight:700,fontSize:'1.1rem',letterSpacing:'1px',marginBottom:6}}>Education</h2>
              {educations.map((edu, idx) => (
                <p key={idx} style={{fontSize:'1rem',color:'#23272f',whiteSpace:'pre-line',marginBottom:8}}>
                  {edu || `Degree, University Name\nGraduation Year`}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* --- DOWNLOAD BUTTON --- */}
      <div className="text-center mt-10">
        <button
          onClick={handleDownload}
          className="px-10 py-4 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition-all text-lg font-semibold"
          style={{
            backgroundColor: '#2563eb',
              color: 'white',
              border: 'none',
              padding: '0.5rem 1.5rem',
              borderRadius: '0.5rem',
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.05rem',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.3s ease-in-out',
              marginTop: '2rem',
              // boxShadow: `0 0 20px rgba(37,99,235,0.4), 0 0 40px rgba(37,99,235,0.3)`, // subtle glow
              textShadow: '0 0 10px rgba(0,0,0,0.2)',
              padding: '0.75rem 2rem',
          }}
        >
          Download as PDF ↓
        </button>
      </div>
    </section>
  );
};

export default TryItSection;