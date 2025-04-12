import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import homeicon from "../assets/homeicon.svg"; // Update the path
import calendaricon from "../assets/calendaricon.svg"; // Update the path
import callicon from "../assets/callicon.svg"; // Update the path
import profile from "../assets/profile.png"; // Update the path
import "./Footer.css"; // Ensure the correct path to your CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <Link to="/"> {/* Navigate to the home route */}
        <img src={homeicon} alt="Home" className="icons" />
      </Link>
      <Link to="/saved">
        <img src={calendaricon} alt="Bookmark" className="icons" />
      </Link>
      <Link to="/contact">
      <img src={callicon} alt="Contact" className="icons" />
      </Link>
      <Link to="/profile">
        <img src={profile} alt="Profile" className="profile-pic icons" />
        </Link>
    </footer>
  );
};

export default Footer;
