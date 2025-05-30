import "../styles/Home.css";
import React from "react";
import { useNavigate } from "react-router-dom"; // Import navigation hook
import LogoHeader from "../Components/LogoHeader"; // Import LogoHeader

const Home = () => {
  const navigate = useNavigate(); // Initialize navigation

  return (
    <div className="home-container">
      <h1 className="home">Home Page</h1>
      <h1>Good morning, Hania Mohamed</h1>
      <p>Account: SAVING xxxx0968</p>
      <LogoHeader /> {/* Displays logo at the top */}
      <div className="services">
        <button onClick={() => navigate("/send-money")}>Send Money</button>
        <button>Collect Money</button>
        <button>Bill Payment</button>
        <button>Manage Account</button>
      </div>
    </div>
  );
};

export default Home;

