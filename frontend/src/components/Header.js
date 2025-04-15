import React, { useState } from "react";
import Sidebar from "./Sidebar";
import threeline from "../assets/threeline.svg";
import searchicon from "../assets/searchicon.svg";
import "./Header.css";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
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
  );
};

export default Header;
