import React from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Homepage from "./components/homepage.js";

function App() {
  return (
    <div>
      <Header />
      <Homepage />
      <Footer /> {/* Footer uses Link, so this works now */}
    </div>
  );
}

export default App;
