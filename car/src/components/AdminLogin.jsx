import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css"; // Import the CSS file

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin@gmail.com" && password === "admin") {
      localStorage.setItem("admin-auth", "true"); // ✅ Store login status
      navigate("/admindash");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="admin-login-wrapper">
      <div className="admin-login-container">
        <h2 className="admin-title">Admin Login</h2>
        {error && <p className="admin-error">{error}</p>}
        <form className="admin-form" onSubmit={handleLogin}>
          <label className="admin-label">Email:</label>
          <input
            type="email"
            className="admin-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="admin-label">Password:</label>
          <input
            type="password"
            className="admin-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="admin-btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
