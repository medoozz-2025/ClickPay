import "../styles/SendMoney.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import navigation hook
import LogoHeader from "../Components/LogoHeader"; // Import LogoHeader

const SendMoney = () => {
  const [transaction, setTransaction] = useState({ mobile: "", amount: "" });
  const navigate = useNavigate(); // Initialize navigation

  const handleSend = () => {
    // Navigate to Confirmation Page with recipient & amount
    navigate(`/confirmation`, { state: transaction });
  };

  return (
    <div className="send-money-container">
      <LogoHeader /> {/* Displays logo at the top */}
      <h2 className="send">Send Money</h2>
      <input type="text" placeholder="Mobile Number" onChange={(e) => setTransaction({...transaction, mobile: e.target.value})} />
      <input type="number" placeholder="Amount (EGP)" onChange={(e) => setTransaction({...transaction, amount: e.target.value})} />
      <button onClick={handleSend}>CONFIRM</button>
    </div>
  );
};

export default SendMoney;

