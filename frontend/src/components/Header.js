<<<<<<< HEAD
import React, { useState } from "react"; // Import React and useState hook
import threeline from "../assets/threeline.svg"; // Path to your menu icon
import searchicon from "../assets/searchicon.svg"; // Path to your search icon
import "./Header.css"; // Your CSS file for styles

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to manage sidebar visibility

  // Function to toggle the sidebar visibility
=======
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import threeline from "../assets/threeline.svg";
import searchicon from "../assets/searchicon.svg";
import "./Header.css";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

>>>>>>> 2013c7f895fbeb786f63f9a81d3c67a6cf249f89
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
<<<<<<< HEAD
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
=======
    <>
      <header className="header">
        {/* Hamburger Menu */}
        <button className="hamburger" onClick={toggleSidebar}>
          ☰
        </button>
        <h1 className="name">YOGA CLUB</h1>
        <img src={searchicon} alt="Search" className="icons" />
      </header>

      {/* Sidebar & Overlay */}
      <div
        className={`sidebar-overlay ${isSidebarOpen ? "active" : ""}`}
        onClick={toggleSidebar}
      ></div>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
>>>>>>> 2013c7f895fbeb786f63f9a81d3c67a6cf249f89
  );
};

export default Header;
