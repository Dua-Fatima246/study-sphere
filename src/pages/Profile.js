import React from 'react';
import profilePic from '../assets/pic.jpg';

function Profile() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img src={profilePic} alt="Profile" style={styles.image} />
        <h2 style={styles.name}>Sittara Haider</h2>
        <p style={styles.title}>🎓 MBA (HRM) – COMSATS Lahore</p>
        <p style={styles.email}>📧 pract001122@gmail.com | 📞 0305-2253637</p>
        <p style={styles.bio}>
          👋 I'm a motivating, hardworking, and results-oriented individual with strong leadership skills.
          I have over 10 years of teaching experience and 1 year of experience working with DES Studio UK 
          on various tasks including book writing and Canva design.
        </p>
        <h3 style={styles.sectionHeading}>💼 Core Skills</h3>
        <ul style={styles.list}>
          <li>MS Office</li>
          <li>MS Excel</li>
          <li>MS PowerPoint</li>
        </ul>

        <h3 style={styles.sectionHeading}>🌐 Languages</h3>
        <ul style={styles.list}>
          <li>English</li>
          <li>Urdu</li>
          <li>Punjabi</li>
        </ul>

        <h3 style={styles.sectionHeading}>💡 Interests</h3>
        <p style={styles.bio}>Exploring different things on the internet</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#f0f2f5',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '120px',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '15px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    maxWidth: '500px',
    textAlign: 'center',
    fontFamily: 'Segoe UI, sans-serif',
  },
  image: {
    width: '130px',
    height: '130px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '20px',
    border: '4px solid #007bff',
  },
  name: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '5px',
  },
  title: {
    fontSize: '18px',
    color: '#007bff',
    marginBottom: '10px',
  },
  email: {
    fontSize: '16px',
    color: '#555',
    marginBottom: '20px',
  },
  bio: {
    fontSize: '15px',
    color: '#444',
    lineHeight: '1.6',
    marginBottom: '15px',
  },
  sectionHeading: {
    fontSize: '18px',
    color: '#333',
    marginTop: '20px',
    marginBottom: '10px',
  },
  list: {
    listStyleType: 'disc',
    paddingLeft: '20px',
    textAlign: 'left',
    color: '#444',
    marginBottom: '10px',
  },
};

export default Profile;
