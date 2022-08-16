import React from "react";
import "../src/App.scss";
import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import Footer from "./components/Footer"

function App() {
  return <div className="App">
    <Navigation />
    <Hero />
      <div className="net"></div>
      
    <Footer />
  </div>
}

export default App;
