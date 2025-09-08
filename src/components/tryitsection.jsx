import React, { useState, useRef } from "react";
import { jsPDF } from "jspdf";

const TryItSection = ({ onStartCreating }) => {
  const [info, setInfo] = useState({
    name: "AHMDD SAAH",
    title: "MARKETING MANAGER",
    contact: {
      phone: "+124-4236-7894",
      email: "hello@ahmedd saaahh.com",
      address: "123fdfdgd., Any City",
      website: "www.ahmedd saaahh.com",
    },
    profile:
      "Neimo ensiont est atem Aham ipsum, finifam imbo sido. Intum lumina parco regia Aham extra mola idis...",
    skills: [
      "Strategic Planning",
      "Problem Solving",
      "Crisis Management",
      "Creative Thinking",
      "Data Analysis",
    ],
    languages: ["English (Fluent)"],
    reference: {
      name: "Estelle Darcy",
      title: "CTO",
      phone: "+124-4236-7894",
      email: "hello@ahmedd saaahh.com",
    },
    work: [
      {
        company: "Borcelle Studio",
        role: "Marketing Manager & Specialist",
        period: "2030 - PRESENT",
        details: [
          "Formulate and implement detailed marketing strategies and initiatives that support the company's mission and objectives.",
          "Guide, inspire, and oversee a dynamic marketing team.",
        ],
      },
    ],
    education: [
      {
        degree: "Master of Business Management",
        school: "School of business | Wardiere University",
        period: "2029 - 2031",
      },
    ],
  });

  const resumeRef = useRef();

  const handleChange = (field, value) => {
    setInfo({ ...info, [field]: value });
  };

  const handleDownload = () => {
    const doc = new jsPDF("p", "pt", "a4");
    doc.html(resumeRef.current, {
      callback: function (doc) {
        doc.save("resume.pdf");
        if (onStartCreating) onStartCreating();
      },
      x: 10,
      y: 10,
      html2canvas: { scale: 0.5 },
    });
  };

  return (
    <section className="w-full py-20 flex justify-center bg-gradient-to-b from-white via-gray-50 to-white">
      <div ref={resumeRef} style={{ width: 800, padding: "2rem", background: "white", boxShadow: "0 0 20px rgba(0,0,0,0.1)" }}>
        <div style={{ display: "flex", gap: "2rem" }}>
          {/* Left Column */}
          <div style={{ flex: 1, borderRight: "1px solid #ccc", paddingRight: "1rem" }}>
            <h3>Contact</h3>
            <input
              type="text"
              value={info.contact.phone}
              onChange={(e) => setInfo({ ...info, contact: { ...info.contact, phone: e.target.value } })}
            />
            <input
              type="text"
              value={info.contact.email}
              onChange={(e) => setInfo({ ...info, contact: { ...info.contact, email: e.target.value } })}
            />
            <input
              type="text"
              value={info.contact.address}
              onChange={(e) => setInfo({ ...info, contact: { ...info.contact, address: e.target.value } })}
            />
            <input
              type="text"
              value={info.contact.website}
              onChange={(e) => setInfo({ ...info, contact: { ...info.contact, website: e.target.value } })}
            />

            <h3>Skills</h3>
            {info.skills.map((s, idx) => (
              <input
                key={idx}
                type="text"
                value={s}
                onChange={(e) => {
                  const newSkills = [...info.skills];
                  newSkills[idx] = e.target.value;
                  setInfo({ ...info, skills: newSkills });
                }}
              />
            ))}

            <h3>Languages</h3>
            {info.languages.map((l, idx) => (
              <input
                key={idx}
                type="text"
                value={l}
                onChange={(e) => {
                  const newLang = [...info.languages];
                  newLang[idx] = e.target.value;
                  setInfo({ ...info, languages: newLang });
                }}
              />
            ))}

            <h3>Reference</h3>
            <input
              type="text"
              value={info.reference.name}
              onChange={(e) => setInfo({ ...info, reference: { ...info.reference, name: e.target.value } })}
            />
            <input
              type="text"
              value={info.reference.title}
              onChange={(e) => setInfo({ ...info, reference: { ...info.reference, title: e.target.value } })}
            />
            <input
              type="text"
              value={info.reference.phone}
              onChange={(e) => setInfo({ ...info, reference: { ...info.reference, phone: e.target.value } })}
            />
            <input
              type="text"
              value={info.reference.email}
              onChange={(e) => setInfo({ ...info, reference: { ...info.reference, email: e.target.value } })}
            />
          </div>

          {/* Right Column */}
          <div style={{ flex: 2, paddingLeft: "1rem" }}>
            <h1>{info.name}</h1>
            <h2>{info.title}</h2>

            <h3>Profile</h3>
            <textarea
              value={info.profile}
              onChange={(e) => setInfo({ ...info, profile: e.target.value })}
              rows={4}
            />

            <h3>Work Experience</h3>
            {info.work.map((w, idx) => (
              <div key={idx}>
                <h4>{w.company} ({w.period})</h4>
                <p>{w.role}</p>
                <ul>
                  {w.details.map((d, didx) => (
                    <li key={didx}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}

            <h3>Education</h3>
            {info.education.map((e, idx) => (
              <div key={idx}>
                <h4>{e.degree} ({e.period})</h4>
                <p>{e.school}</p>
              </div>
            ))}
          </div>
        </div>

        <button onClick={handleDownload} style={{ marginTop: "2rem", padding: "0.75rem 1.5rem", background: "#2563eb", color: "white", border: "none", cursor: "pointer" }}>
          Download as PDF
        </button>
      </div>
    </section>
  );
};

export default TryItSection;
