import React from "react";
import { useNavigate } from "react-router-dom"; // Import navigation hook
import "../styles/Register.css";
import LogoHeader from "../Components/LogoHeader"; // Import LogoHeader

const Register = () => {
  const navigate = useNavigate(); // Initialize navigation

  const handleRegister = () => {
    navigate("/login"); // Redirect to Login page after sign-up
  };

  return (
    <div className="register-container">
      <LogoHeader /> {/* Displays logo at the top */}

      <h2 className="create">Create Your Account</h2>
      
      <label>Username</label>
      <input type="text" placeholder="Enter username" />

      <label>Email</label>
      <input type="email" placeholder="Enter email" />

      <label>Password</label>
      <input type="password" placeholder="Enter password" />

      <label>Confirm Password</label>
      <input type="password" placeholder="Re-enter password" />

      <button onClick={handleRegister}>Sign Up</button>
      
      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  );
};

export default Register;

