import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();

  const goToSubject = () => {
    navigate("/subject", {
      state: { message: "To learn more go to the subject" }
    });
  };

  // State to control hover effects
  const [hovered, setHovered] = useState({
    heading: false,
    button: false,
    paragraph: null,
  });

  return (
    <div style={styles.page}>
      <h2
        style={{
          ...styles.heading,
          color: hovered.heading ? '#0056b3' : '#007bff',
          transition: 'color 0.3s ease',
          cursor: 'pointer',
        }}
        onMouseEnter={() => setHovered({ ...hovered, heading: true })}
        onMouseLeave={() => setHovered({ ...hovered, heading: false })}
      >
        About Study Sphere
      </h2>

      <div style={styles.infoBox}>
        {paragraphs.map((text, i) => (
          <p
            key={i}
            style={{
              ...styles.paragraph,
              color: hovered.paragraph === i ? '#0056b3' : '#333',
              transition: 'color 0.3s ease',
              cursor: 'default',
            }}
            onMouseEnter={() => setHovered({ ...hovered, paragraph: i })}
            onMouseLeave={() => setHovered({ ...hovered, paragraph: null })}
          >
            {text}
          </p>
        ))}
      </div>

      <button
        onClick={goToSubject}
        style={{
          ...styles.button,
          backgroundColor: hovered.button ? '#0056b3' : '#007bff',
          transition: 'background-color 0.3s ease',
        }}
        onMouseEnter={() => setHovered({ ...hovered, button: true })}
        onMouseLeave={() => setHovered({ ...hovered, button: false })}
      >
        Go to Subjects
      </button>
    </div>
  );
}

// Paragraphs separated for easier hover mapping
const paragraphs = [
  "Study Sphere is an interactive Q&A platform built using React. It’s designed to empower students by giving them a space to ask academic questions, seek clarification on concepts, and receive help from peers, educators, or tutors — all in real time.",
  "Whether you're stuck on a math equation, curious about a science concept, or need help with grammar, Subschool lets you post your question, optionally attach an image, and get responses from a community of learners.",
  "Our question system supports rich formatting so students can clearly explain what they’re struggling with. Others in the community can provide comments, answers, suggestions, or even guide them through the solution process. Every question can be liked, commented on, and discussed — fostering deeper understanding through interaction.",
    "Our goal is to make learning easy, supportive, and accessible. By creating a space where students help one another, we’re building a knowledge-sharing environment that supports academic success across all subjects.",
];

const styles = {
  page: {
    padding: '100px 60px 60px',
    minHeight: '100vh',
    background: 'linear-gradient(to bottom right, #e3f2fd, #ffffff)',
  },
  heading: {
    fontSize: '28px',
    marginBottom: '20px',
  },
  infoBox: {
    background: '#f8f9fa',
    border: '1px solid #d6e9f9',
    borderRadius: '10px',
    padding: '30px',
    lineHeight: '1.8',
    fontSize: '16px',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.05)',
    marginBottom: '20px',
  },
  paragraph: {
    marginBottom: '16px',
  },
  button: {
    padding: "10px 18px",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px"
  }
};

export default About;
