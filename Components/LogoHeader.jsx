import React from "react";
import i1 from "../Images/i1.png"; // Import logo
import "../styles/LogoHeader.css"; // Import styles

const LogoHeader = () => {
  return (
    <div className="logo-header">
      <img src={i1} alt="App Logo" />
    </div>
  );
};

export default LogoHeader;
