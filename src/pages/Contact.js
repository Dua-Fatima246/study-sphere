import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required.';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email format is invalid.';
    }

    if (!message.trim()) {
      newErrors.message = 'Message is required.';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert('Message sent successfully!');
      // Clear form
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div style={{ padding: '80px' }}>
      <h2>Contact Us</h2>
      <p>If you have any questions, feedback, or suggestions, feel free to reach out.</p>

      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>Name:</label><br />
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        </div>
        <br />
        <div>
          <label>Email:</label><br />
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>
        <br />
        <div>
          <label>Message:</label><br />
          <textarea
            placeholder="Your message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
        </div>
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;