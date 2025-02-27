import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  // Function to scroll smoothly to the footer section
  const scrollToFooter = (e) => {
    e.preventDefault(); // Prevent default link behavior

    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    } else {
      // If footer is not on the page, navigate to Home and scroll after a delay
      navigate("/home");
      setTimeout(() => {
        const footerAfterNav = document.getElementById("footer");
        if (footerAfterNav) {
          footerAfterNav.scrollIntoView({ behavior: "smooth" });
        }
      }, 500); // Wait for navigation before scrolling
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">🚗 CarZone</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/cars">Cars</Link>
        </li>
        
        <li>
          <a href="#footer" onClick={scrollToFooter}>Contact</a>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
