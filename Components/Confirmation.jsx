import "../styles/Confirmation.css";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import navigation
import LogoHeader from "../Components/LogoHeader"; // Import LogoHeader

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { mobile, amount } = location.state || { mobile: "Unknown", amount: "0" };

  return (
    <div className="confirmation-container">
    <LogoHeader /> {/* Displays logo at the top */}
    <h2>
      EGP <span className="highlight">{amount}</span> SENT TO <span className="highlight">{mobile}</span>
    </h2>

      <button onClick={() => navigate("/home")}>DONE</button>
    </div>
  );
};

export default Confirmation;
