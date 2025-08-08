import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={styles.navbar}>
      {/* Left: Logo */}
      <div style={styles.logo}>
        <Link to="/" style={styles.logoLink}>📚 Study Sphere</Link>
      </div>

      {/* Right: Navigation Links */}
      <ul style={styles.navLinks}>
        <li><Link to="/" style={styles.link}>🏠 Home</Link></li>
       <li><Link to="/about" style={styles.link}>ℹ️ About</Link></li>
        <li><Link to="/subject" style={styles.link}>🔍 Subject</Link></li>
        
        <li><Link to="/profile" style={styles.link}>👤 Profile</Link></li>
        
        <li><Link to="/login" style={styles.link}>🔐 Login</Link></li>
        <li><Link to="/contact" style={styles.link}>📞 Contact</Link></li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 30px',
    backgroundColor: 'rgba(22, 102, 176, 1)',
    borderBottom: '1px solid #ddd',
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 1000,
  },
  logo: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  logoLink: {
   color: '#e8ebedff',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '18px',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
    margin: 0,
    padding: 0,
  },
  link: {
    textDecoration: 'none',
    color: '#e8ebedff',
    fontWeight: '500',
    fontSize: '15px',
  },
};

export default Navbar;
