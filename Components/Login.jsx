import React from "react";
import { useNavigate } from "react-router-dom"; // Import navigation hook
import "../styles/Login.css";
import LogoHeader from "../Components/LogoHeader"; // Import LogoHeader

const Login = () => {
  const navigate = useNavigate(); // Initialize navigation

  const handleLogin = () => {
    navigate("/home"); // Redirect to Home page
  };

  return (
    <div className="login-container">

      <LogoHeader /> {/* Displays logo at the top */}
      <h2 className="log">Log In</h2>
      
      <label>Username</label>
      <input type="text" placeholder="Enter your username" />

      <label>Password</label>
      <input type="password" placeholder="Enter your password" />

      <button onClick={handleLogin}>Login</button>

      <p>Don't have an account? <a href="/register">Sign Up</a></p>
    </div>
  );
};

export default Login;
