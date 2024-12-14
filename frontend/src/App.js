import React from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div>
      <Header />
      <h1>Yoga Website</h1>
      <Footer /> {/* Footer uses Link, so this works now */}
    </div>
  );
}

export default App;
