import React, { useState } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = isLogin ? "Login successful!" : "Signup successful!";
    alert(`${message}\nEmail: ${email}`);

    // Save login state to localStorage
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", email);

    // Redirect to homepage
    window.location.href = "/";
  };

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="auth-page-wrapper">
      <div className="auth-container">
        <h2>{isLogin ? "Login" : "Signup"}</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">{isLogin ? "Login" : "Signup"}</button>
        </form>

        {/* 👇 OAuth Buttons placed right after Login/Signup */}
        <div className="oauth-buttons" style={{ marginTop: "20px" }}>
          <button className="google-btn" style={styles.oauthBtn}>
            <FaGoogle style={styles.icon} />{" "}
            {isLogin ? "Login" : "Signup"} with Google
          </button>
          <button className="github-btn" style={styles.oauthBtn}>
            <FaGithub style={styles.icon} />{" "}
            {isLogin ? "Login" : "Signup"} with GitHub
          </button>
        </div>

        <p className="toggle-link" style={{ marginTop: "15px" }}>
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span onClick={toggleForm} style={{ color: "#007bff", cursor: "pointer" }}>
            {isLogin ? "Signup here" : "Login here"}
          </span>
        </p>
      </div>
    </div>
  );
};

const styles = {
  oauthBtn: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    cursor: "pointer",
    backgroundColor: "#f5f5f5",
    fontWeight: "bold",
    justifyContent: "center",
  },
  icon: {
    fontSize: "18px",
  },
};

export default AuthPage;
