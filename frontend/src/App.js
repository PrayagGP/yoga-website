import React from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Homepage from "./components/homepage.js";
import Events from "./components/EventsPage.js";
import EventsList from "./components/EventList.js";

function App() {
  return (
    <div>
      <Header />
      <EventsList />
      <Footer /> {/* Footer uses Link, so this works now */}
    </div>
  );
}

export default App;
