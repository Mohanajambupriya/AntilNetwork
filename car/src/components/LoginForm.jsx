import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./LoginForm.css";
import { auth, googleProvider } from "../firebaseConfig"; 
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle login with email and password
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      alert("Login successful!");
      navigate("/home"); // Redirect to Home after login
    } catch (error) {
      console.error("Login error:", error.message);
      alert("Invalid email or password!");
    }
  };

  // Handle Google login
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Logged in with Google successfully!");
      navigate("/home");
    } catch (error) {
      console.error("Google login error:", error.message);
      alert(error.message);
    }
  };

  return (
    <div className="fullform">
      <div className="card">
        <div className="card2">
          <form className="form" onSubmit={handleSubmit}>
            <p id="heading">Login</p>
            <div className="field">
              <input
                type="email"
                className="input-field"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field">
              <input
                type="password"
                className="input-field"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="btn">
              <button type="submit" className="sig">
                Login
              </button>
              <Link to="/signup">
                <button type="button" className="sig">Sign Up</button>
              </Link>
            </div>
            <button
              type="button"
              className="button3"
              onClick={handleGoogleLogin}
            >
              Continue with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
