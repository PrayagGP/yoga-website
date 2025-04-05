import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Homepage from "./components/homepage.js";
// <<<<<<< HEAD
import Events from "./components/EventsPage.js";
import EventsList from "./components/EventList.js";
import TeamcatogPage from "./components/teamcatogPage.js";
import EventDetails from "./components/EventDetails.jsx";
import Developers from "./components/DevelopersTeam.jsx";
// =======
import Contact from "./components/Contact";
// >>>>>>> dd795f28c1fed336cea3a1a39828cb0bcbd03409

function App() {
  return (
    <div>
      <Header />
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/eventslist" element={<EventsList />} />
          <Route path="/eventdetails" element={<EventDetails />} />
          <Route path="/teamcatog" element={<TeamcatogPage />} />
          <Route path="/developers" element={<Developers />} />
      </Routes>
      <Footer /> {/* Footer uses Link, so this works now */}
    </div>
  );
}

export default App;
