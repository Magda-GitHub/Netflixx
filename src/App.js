import React from "react";
import "../src/App.scss";
import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import Tiles from "./components/Tiles"
import Footer from "./components/Footer"
import requests from "./config/Requests";




function App() {
  return(

   <div className="App">
  
    <Navigation />
    <Hero />
    <Tiles title="Continue to watch" fetchUrl={requests.fetchTopRated} />
    <Tiles title="Popular on Netflix" fetchUrl={requests.fetchRomanceMovies}/>
    
      
    <Footer />

  
    
  </div>
  );
}

export default App;
