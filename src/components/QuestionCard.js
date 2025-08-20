import React, { useState } from 'react';

function QuestionCard({ title, content }) {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState('');

  const handleLike = () => setLikes(likes + 1);

  const handleComment = () => {
    setComments([...comments, commentInput]);
    setCommentInput('');
  };

  return (
    <div style={{ border: '1px solid #ccc', margin: '10px' }}>
      <h3>{title}</h3>
      <p>{content}</p>
      <button onClick={handleLike}>👍 {likes}</button>
      <br />
      <input 
        type="text" 
        placeholder="Write comment..." 
        value={commentInput} 
        onChange={(e) => setCommentInput(e.target.value)}
      />
      <button onClick={handleComment}>Add</button>
      {comments.map((c, i) => <p key={i}>💬 {c}</p>)}
    </div>
  );
}

export default QuestionCard;