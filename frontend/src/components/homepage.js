import React, { useState } from "react"; // Import React and useState hook
import threeline from "../assets/threeline.svg"; // Path to your menu icon
import searchicon from "../assets/searchicon.svg"; // Path to your search icon
import "./Header.css"; // Your CSS file for styles

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to manage sidebar visibility

  // Function to toggle the sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="header">
      <img
        src={threeline}
        alt="Menu"
        className="icons"
        onClick={toggleSidebar} // Toggle sidebar visibility on click
      />
      <h1 className="name">YOGA CLUB</h1>
      <img src={searchicon} alt="Search" className="icons" />
      
      {/* Sidebar toggle (you can use this to add a sidebar component if necessary) */}
      {isSidebarOpen && (
        <div className="sidebar">
          {/* Sidebar content goes here */}
          <p>Sidebar content...</p>
        </div>
      )}
    </header>
  );
};

export default Header;
