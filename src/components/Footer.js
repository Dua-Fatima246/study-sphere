import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Subschool. All rights reserved.</p>
      <p>📧 Email: <a href="mailto:pract001122@gmail.com" style={styles.link}>pract001122@gmail.com</a></p>
      <p>📞 Phone: 0305-2253637</p>
      <p>📍 Address: Labe Neelam, Layyah</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#007BFF',
    color: '#fff',
    padding: '50px',
    textAlign: 'center',
    fontSize: '14px',
    lineHeight: '1.6',
  },
  link: {
    color: '#fff',
    textDecoration: 'underline',
  }
};

export default Footer;
