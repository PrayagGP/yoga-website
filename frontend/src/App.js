import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Homepage from "./components/homepage.js";
import Contact from "./components/Contact";

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
