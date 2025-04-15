import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./components/homepage";
import Events from "./components/EventsPage";
import EventsList from "./components/EventList";
import TeamcatogPage from "./components/teamcatogPage";
import EventDetails from "./components/EventDetails";
import Members from "./components/Members";
import Contact from "./components/Contact";
import Sidebar from "./components/Sidebar";
import Webinars from "./components/Webinar";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app">
      <Header toggleSidebar={toggleSidebar} />
      {isSidebarOpen && <Sidebar toggleSidebar={toggleSidebar} />}
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/eventslist" element={<EventsList />} />
          <Route path="/eventdetails" element={<EventDetails />} />
          <Route path="/teamcatog" element={<TeamcatogPage />} />
          <Route path="/members" element={<Members />} />
          <Route path="/webinars" element={<Webinars />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
