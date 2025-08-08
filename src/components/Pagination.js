import React, { useState } from 'react';

const subjectsData = [
  { title: 'HTML', description: 'Structure of webpages.' },
  { title: 'CSS', description: 'Style and layout of webpages.' },
  { title: 'JavaScript', description: 'Logic and interactivity for webpages.' },
  { title: 'React', description: 'Frontend JS library for UI.' },
  { title: 'Node.js', description: 'Backend JavaScript runtime.' },
  { title: 'MongoDB', description: 'NoSQL database system.' },
  { title: 'Python', description: 'General-purpose programming language.' },
  { title: 'C++', description: 'Powerful system programming language.' },
  { title: 'Java', description: 'Object-oriented programming language.' },
];

const itemsPerPage = 3;

function Subject() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(subjectsData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleSubjects = subjectsData.slice(startIndex, startIndex + itemsPerPage);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>📚 Computer Languages</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {visibleSubjects.map((subject, index) => (
          <div key={index} style={{
            border: '1px solid #ccc',
            borderRadius: '10px',
            padding: '15px',
            width: '250px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
          }}>
            <h3>{subject.title}</h3>
            <p>{subject.description}</p>
          </div>
        ))}
      </div>

      {/* Pagination Buttons */}
      <div style={{ marginTop: '20px' }}>
        <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
          ⬅ Prev
        </button>
        <span style={{ margin: '0 10px' }}>Page {currentPage} of {totalPages}</span>
        <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
          Next ➡
        </button>
      </div>
    </div>
  );
}

export default Subject;