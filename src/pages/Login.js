import React, { useState } from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!isLogin && !formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    if (isLogin) {
      console.log('Logging in with:', formData);
    } else {
      console.log('Signing up with:', formData);
    }

    setFormData({ name: '', email: '', password: '' });
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>{isLogin ? "Login to Study Sphere" : "Sign Up for Study Sphere"}</h2>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <div className="auth-error">{errors.name}</div>}
            </>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="auth-error">{errors.email}</div>}

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <div className="auth-error">{errors.password}</div>}

          {isLogin && (
            <div className="forgot-link">
              <a href="#">Forgot Password?</a>
            </div>
          )}

          <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
        </form>

        {/* OAuth buttons below main button */}
        <div className="oauth-buttons" style={{ marginTop: '20px' }}>
          <button style={styles.oauthBtn}>
            <FaGoogle style={styles.icon} /> {isLogin ? "Login" : "Sign Up"} with Google
          </button>
          <button style={styles.oauthBtn}>
            <FaGithub style={styles.icon} /> {isLogin ? "Login" : "Sign Up"} with GitHub
          </button>
        </div>

        {/* Toggle login/signup */}
        <p className="toggle-text" style={{ marginTop: '15px' }}>
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span onClick={() => setIsLogin(!isLogin)} style={{ color: "#007bff", cursor: "pointer" }}>
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
}

// ✅ Basic inline styles for buttons/icons
const styles = {
  oauthBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    width: '100%',
    padding: '10px',
    marginTop: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    cursor: 'pointer',
    backgroundColor: '#3d0ee7ff',
    fontWeight: 'bold',
  },
  icon: {
    fontSize: '18px',
    backgroundColor: '#43dc9cff'
  }
};

export default Login;
