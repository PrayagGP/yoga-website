import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Homepage from "./components/homepage.js";
<<<<<<< HEAD
import Events from "./components/EventsPage.js";
import EventsList from "./components/EventList.js";
import TeamcatogPage from "./components/teamcatogPage.js";
=======
import Contact from "./components/Contact";
>>>>>>> dd795f28c1fed336cea3a1a39828cb0bcbd03409

function App() {
  return (
    <div>
      <Header />
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer /> {/* Footer uses Link, so this works now */}
    </div>
  );
}

export default App;
