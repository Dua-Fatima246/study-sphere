import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function AskQuestion() {
  const [title, setTitle] = useState('');
  const [question, setQuestion] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, question, image });
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Enter your question title..." 
        style={styles.titleInput}
      />
      
      <ReactQuill 
        value={question} 
        onChange={setQuestion} 
        placeholder="Explain your question with details..." 
        style={styles.quill}
      />
      
      <input 
        type="file" 
        onChange={(e) => setImage(e.target.files[0])} 
        style={styles.fileInput}
      />
      
      <button type="submit" style={styles.button}>Post Question</button>
    </form>
  );
}

const styles = {
  form: {
    padding: '80px',
    maxWidth: '800px',
    margin: 'auto',
    background: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  titleInput: {
    width: '100%',
    padding: '15px',
    fontSize: '18px',
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  quill: {
    height: '300px',
    marginBottom: '20px',
  },
  fileInput: {
    marginBottom: '20px',
  },
  button: {
    padding: '12px 25px',
    fontSize: '16px',
    background: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  }
};

export default AskQuestion;
