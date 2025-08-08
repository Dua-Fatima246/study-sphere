import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const subjectsData = [
  {
    title: 'HTML',
    description: 'HTML (HyperText Markup Language) is the foundation of all web pages. It structures content using elements like headings, paragraphs, lists, and links. It is essential for creating accessible, semantic, and organized websites.'
  },
  {
    title: 'CSS',
    description: 'CSS (Cascading Style Sheets) adds design and layout to web pages. It handles colors, fonts, spacing, positioning, responsiveness, animations, and more, making websites visually appealing and responsive across devices.'
  },
  {
    title: 'JavaScript',
    description: 'JavaScript enables dynamic and interactive content on web pages, such as sliders, form validation, and animations. It’s the most widely-used language for client-side scripting and plays a crucial role in full-stack development.'
  },
  {
    title: 'React',
    description: 'React is a popular JavaScript library used for building fast, interactive user interfaces. It uses reusable components, virtual DOM, and state management, making front-end development modular and maintainable.'
  },
  {
    title: 'Node.js',
    description: 'Node.js is a backend runtime built on Chrome’s V8 engine. It allows developers to build scalable server-side applications using JavaScript. It’s known for event-driven, non-blocking I/O and is ideal for APIs and real-time apps.'
  },
  {
    title: 'MongoDB',
    description: 'MongoDB is a flexible NoSQL database that stores data in JSON-like documents. It supports horizontal scaling and is commonly used with Node.js in full-stack development due to its ease of use and flexibility.'
  },
  {
    title: 'Python',
    description: 'Python is a high-level, readable programming language popular for web development, data analysis, artificial intelligence, automation, and scripting. Its simplicity and vast libraries make it beginner-friendly and powerful.'
  },
  {
    title: 'C++',
    description: 'C++ is a compiled, high-performance language commonly used for game engines, system software, and performance-critical applications. It supports both procedural and object-oriented programming paradigms.'
  },
  {
    title: 'Java',
    description: 'Java is a versatile, object-oriented language used in enterprise applications, Android apps, and large-scale systems. It’s known for its portability, robustness, and large community support.'
  }
];

const itemsPerPage = 3;

function Subject() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();
  const message = location.state?.message || '';

  const filteredSubjects = subjectsData.filter(subject =>
    subject.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredSubjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleSubjects = filteredSubjects.slice(startIndex, startIndex + itemsPerPage);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div style={styles.container}>
      <h2
        style={styles.heading}
        onMouseEnter={(e) => e.target.style.color = '#0056b3'}
        onMouseLeave={(e) => e.target.style.color = '#007bff'}
      >
        📚 Computer Languages
      </h2>

      {message && (
        <p style={styles.messageBox}>
          {message}
        </p>
      )}

      <input
        type="text"
        placeholder="🔍 Search subject..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={styles.searchInput}
      />

      <div style={styles.cardWrapper}>
        {visibleSubjects.length > 0 ? (
          visibleSubjects.map((subject, index) => (
            <div key={index} style={styles.card}>
              <h3
                style={styles.cardTitle}
                onMouseEnter={(e) => e.target.style.color = '#007bff'}
                onMouseLeave={(e) => e.target.style.color = '#333'}
              >
                {subject.title}
              </h3>
              <p style={styles.cardDesc}>{subject.description}</p>
            </div>
          ))
        ) : (
          <p style={{ marginTop: '20px' }}>No subjects found.</p>
        )}
      </div>

      {filteredSubjects.length > itemsPerPage && (
        <div style={styles.pagination}>
          <button
            style={styles.button}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#007bff'}
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            ⬅ Prev
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button
            style={styles.button}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#007bff'}
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next ➡
          </button>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: '100px 60px 60px',
    minHeight: '100vh',
    background: 'linear-gradient(to right, #f0f8ff, #ffffff)',
  },
  heading: {
    fontSize: '28px',
    color: '#007bff',
    marginBottom: '30px',
    transition: 'color 0.3s ease',
    cursor: 'pointer',
  },
  messageBox: {
    background: "#e6f4ff",
    padding: "12px 18px",
    borderRadius: "8px",
    marginBottom: "20px",
    border: "1px solid #cce5ff",
    fontWeight: 'bold',
  },
  searchInput: {
    padding: '12px',
    width: '100%',
    maxWidth: '350px',
    marginBottom: '40px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px'
  },
  cardWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '20px',
    width: '100%',
    maxWidth: '350px',
    height: 'auto',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
    transition: 'transform 0.2s ease-in-out',
  },
  cardTitle: {
    marginBottom: '10px',
    fontSize: '20px',
    color: '#333',
    transition: 'color 0.3s ease',
    cursor: 'pointer',
  },
  cardDesc: {
    fontSize: '15px',
    color: '#555',
    lineHeight: '1.6',
  },
  pagination: {
    marginTop: '30px',
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    fontSize: '16px',
  },
  button: {
    padding: '8px 14px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  }
};

export default Subject;
