import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* Hamburger Button */}
      <button className="hamburger" onClick={toggleSidebar}>
        ☰
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        {/* Logo Section */}
        <div className="logo-section">
          <img src="/logo.png" alt="Yoga Club" />
          <span className="logo-text">YOGA CLUB</span>
        </div>

        {/* Navigation Links */}
        <nav className="nav-links">
          <Link to="/" className="nav-link" onClick={toggleSidebar}>Home</Link>
          <Link to="/events" className="nav-link" onClick={toggleSidebar}>Events</Link>
          <Link to="/calendar" className="nav-link" onClick={toggleSidebar}>Calendar</Link>
          <Link to="/webinars" className="nav-link" onClick={toggleSidebar}>Webinars</Link>
          <Link to="/teamcatog" className="nav-link" onClick={toggleSidebar}>Club Members</Link>
          <Link to="/members?team=internit" className="nav-link" onClick={toggleSidebar}>Inter NIT Team</Link>
          <Link to="/members?team=developers" className="nav-link" onClick={toggleSidebar}>Developers Team</Link>
          <Link to="/settings" className="nav-link" onClick={toggleSidebar}>Settings</Link>
        </nav>

        {/* Profile Section */}
        <div className="profile-section">
          <img src="/profile.jpg" alt="Profile" className="profile-img" />
          <span>Khushi Sesma</span>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
