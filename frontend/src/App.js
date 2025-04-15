import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Homepage from "./components/homepage.js";
import Events from "./components/EventsPage.js";
import EventsList from "./components/EventList.js";
import TeamcatogPage from "./components/teamcatogPage.js";
import EventDetails from "./components/EventDetails.jsx";
import Developers from "./components/DevelopersTeam.jsx";
import Contact from "./components/Contact";
import Sidebar from "./components/Sidebar";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <Header toggleSidebar={toggleSidebar} />
      {isSidebarOpen && <Sidebar toggleSidebar={toggleSidebar} />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/eventslist" element={<EventsList />} />
        <Route path="/eventdetails" element={<EventDetails />} />
        <Route path="/teamcatog" element={<TeamcatogPage />} />
        <Route path="/developers" element={<Developers />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
