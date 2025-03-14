import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth, googleProvider, db } from "/src/firebaseConfig";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    Username: "",
    Password: "",
    ConfirmPassword: "",
    Email: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Manual Signup Function
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.Password !== formData.ConfirmPassword) {
      alert("Password is not matching");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.Email,
        formData.Password
      );

      // Store user info in Firestore
      await setDoc(doc(db, "users", userCredential.user.uid), {
        Username: formData.Username,
        Email: formData.Email,
        uid: userCredential.user.uid,
      });

      alert("User created successfully");
      navigate("/login");
    } catch (error) {
      console.error("Error creating user:", error.message);
      alert(error.message);
    }
  };

  // Google Sign-In Function
  const handleGoogleSignup = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);

      // Store user info in Firestore
      await setDoc(doc(db, "users", userCredential.user.uid), {
        Username: userCredential.user.displayName,
        Email: userCredential.user.email,
        uid: userCredential.user.uid,
      });

      alert("Signed in with Google successfully");
      navigate("/login");
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
      alert(error.message);
    }
  };

  return (
    <div className="fullform">
      <div className="card">
        <div className="card2">
          <form className="form" onSubmit={handleSubmit}>
            <p id="heading">Sign Up</p>
            <div className="field">
              <input
                type="text"
                className="input-field"
                placeholder="Username"
                name="Username"
                value={formData.Username}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            <div className="field">
              <input
                type="password"
                className="input-field"
                placeholder="Password"
                name="Password"
                value={formData.Password}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <input
                type="password"
                className="input-field"
                placeholder="Confirm Password"
                name="ConfirmPassword"
                value={formData.ConfirmPassword}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <input
                type="email"
                className="input-field"
                placeholder="Email"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
              />
            </div>
            <div className="btn">
              <button type="submit" className="sig">
                Sign Up
              </button>
              <Link to="/login">
                <button type="button" className="sig">Login</button>
              </Link>
            </div>
            <button
              type="button"
              className="button3"
              onClick={handleGoogleSignup}
            >
              Continue with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
