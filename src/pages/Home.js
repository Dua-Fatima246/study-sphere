import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate, Link } from 'react-router-dom';

function Home() {
  const [questions, setQuestions] = useState([
    {
      title: "Math Problem",
      content: "What's 2 + 2?",
      image: null,
      likes: 0,
      comments: [],
    },
    {
      title: "Biology",
      content: "What is DNA?",
      image: null,
      likes: 0,
      comments: [],
    },
  ]);

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [newQuestion, setNewQuestion] = useState({ title: '', content: '', image: null });
  const perPage = 2;
  const navigate = useNavigate();

  const handleNewQuestionSubmit = (e) => {
    e.preventDefault();
    if (newQuestion.title && newQuestion.content) {
      setQuestions([
        {
          ...newQuestion,
          likes: 0,
          comments: [],
        },
        ...questions,
      ]);
      setNewQuestion({ title: '', content: '', image: null });
    } else {
      alert('Please fill in title and content.');
    }
  };

  const handleLike = (index) => {
    const updated = [...questions];
    updated[index].likes += 1;
    setQuestions(updated);
  };

  const handleAddComment = (index, comment) => {
    const updated = [...questions];
    updated[index].comments.push(comment);
    setQuestions(updated);
  };

  const filteredQuestions = questions.filter(q =>
    q.title.toLowerCase().includes(search.toLowerCase()) ||
    q.content.toLowerCase().includes(search.toLowerCase())
  );

  const start = (page - 1) * perPage;
  const end = start + perPage;
  const currentQuestions = filteredQuestions.slice(start, end);

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <ul style={styles.navList}>
          <li><Link to="/" style={styles.link}>🏠 Home</Link></li>
          <li><Link to="/about" style={styles.link}>ℹ️ About</Link></li>
          <li><Link to="/subject" style={styles.link}>📘 Subjects</Link></li>
          <li><Link to="/contact" style={styles.link}>📞 Contact</Link></li>
          <li><Link to="/profile" style={styles.link}>👤 Profile</Link></li>
          <li><Link to="/login" style={styles.link}>🔐 Login</Link></li>
          <li><Link to="/signup" style={styles.link}>📝 Sign Up</Link></li>
        </ul>
      </div>

      {/* Main Content */}
      <div style={styles.content}>
        <h2>Recent Questions</h2>

        <div style={styles.info}>
          <p>✍️ Post questions (with image)</p>
          <p>💬 Get answers in comments</p>
          <p>👍 Like useful answers</p>
          <p>🔍 Search questions</p>
        </div>

        <input
          type="text"
          placeholder="🔍 Search questions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.searchInput}
        />

        {/* New Question Form */}
        <form onSubmit={handleNewQuestionSubmit} style={styles.form}>
          <input
            type="text"
            placeholder="Title"
            value={newQuestion.title}
            onChange={(e) => setNewQuestion({ ...newQuestion, title: e.target.value })}
            required
          />
          <ReactQuill
            theme="snow"
            value={newQuestion.content}
            onChange={(value) => setNewQuestion({ ...newQuestion, content: value })}
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setNewQuestion({ ...newQuestion, image: e.target.files[0] })}
          />
          <button type="submit">Post Question</button>
        </form>

        {/* Question Cards */}
        {currentQuestions.map((q, index) => (
          <div key={index} style={styles.questionCard}>
            <div style={styles.questionContent}>
              <h3>{q.title}</h3>
              <div dangerouslySetInnerHTML={{ __html: q.content }}></div>
              {q.image && (
                <img
                  src={URL.createObjectURL(q.image)}
                  alt="question"
                  style={{ maxWidth: '100%', marginTop: '10px' }}
                />
              )}
            </div>

            {/* Comments Section */}
            <div style={styles.commentSection}>
              <strong>Comments:</strong>
              <ul>
                {q.comments.map((comment, i) => (
                  <li key={i}>{comment}</li>
                ))}
              </ul>
              <input
                type="text"
                placeholder="Add a comment..."
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && e.target.value.trim()) {
                    handleAddComment(index, e.target.value.trim());
                    e.target.value = '';
                  }
                }}
                style={styles.commentInput}
              />
            </div>

            {/* Like & Comment Count Row */}
            <div style={styles.statsRow}>
              <div style={styles.statsLeft}>
                <button onClick={() => handleLike(index)} style={styles.iconBtn}>👍</button>
                <span>{q.likes} Likes</span>
              </div>
              <div style={styles.statsRight}>
                <span>{q.comments.length} Comments</span>
              </div>
            </div>
          </div>
        ))}

        {/* Pagination */}
        <div style={{ marginTop: '20px' }}>
          <button disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button>
          <button disabled={end >= filteredQuestions.length} onClick={() => setPage(page + 1)}>Next</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    padding: '40px',
    marginTop: '60px',
  },
  sidebar: {
    width: '220px',
    padding: '20px',
    background: '#f0f0f0',
    borderRight: '1px solid #ccc',
    borderRadius: '8px',
    height: '100vh',
    position: 'fixed',
    top: '60px',
    left: 0,
  },
  navList: {
    listStyle: 'none',
    padding: 0,
    marginTop: '10px',
  },
  link: {
    display: 'block',
    padding: '8px 0',
    color: '#007bff',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    marginLeft: '250px',
    padding: '20px',
  },
  info: {
    background: '#e8f4fd',
    padding: '10px 15px',
    borderRadius: '5px',
    marginBottom: '20px',
    fontSize: '15px',
    color: '#333',
  },
  searchInput: {
    padding: '10px',
    width: '100%',
    maxWidth: '400px',
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginBottom: '30px',
  },
  questionCard: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#fff',
    marginBottom: '20px',
    padding: '10px',
  },
  questionContent: {
    flex: 1,
  },
  commentSection: {
    marginTop: '10px',
    width: '100%',
    maxWidth: '600px',
  },
  commentInput: {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginTop: '8px',
  },
  iconBtn: {
    background: 'none',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
    marginRight: '5px',
  },
  statsRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '15px',
    paddingTop: '10px',
    borderTop: '1px solid #eee',
  },
  statsLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontWeight: 'bold',
    color: '#555',
  },
  statsRight: {
    fontWeight: 'bold',
    color: '#555',
  },
};

export default Home;
