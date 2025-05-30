import "../styles/Welcome.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import i1 from "../Images/i1.png";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <div className="welcome-logo-container">
        <img src={i1} alt="Welcome Logo" />
      </div>
      <h1 className="welcome-heading">Experience the easier way for transaction!</h1>
      <p className="welcome-text">Connect your money to your friends & brands.</p>
      <button className="small-button" onClick={() => navigate("/login")}>Get Started</button>
    </div>
  );
};

export default Welcome;
