import React from 'react'
import { useState, useEffect } from "react";
import "../components/Hero.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay} from '@fortawesome/free-solid-svg-icons';
import {faCircleInfo} from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import requests from "../config/Requests";



function Hero() {

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData(){
      const request = await axios.get(requests.fetchTrending);
    
    setMovie(
      request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1 )
      ]
    );
  }
  fetchData ();
  }, []);

function createText(string, n) {
  return string?.length > n ? string.substr(0, n-1) : "no description";
}

const mainStyle ={
  backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
  backgroundSize: "cover",
  backgroundPosition: "center center",
};
  
  
  console.log(movie);

  return (
    <header className="main" style={mainStyle}>
        <div className="main_content">
            <h1 className="main_title">{movie?.title || movie?.name || movie.original_title}</h1>
            <p className="main_description">{createText(movie?.overview,150)}</p>
            <div className="main_buttons">
                <button className="main_button main_button_play"><FontAwesomeIcon icon={faPlay}></FontAwesomeIcon> Play</button>
                <button className="main_button"><FontAwesomeIcon icon={faCircleInfo}></FontAwesomeIcon> Info</button>
            </div>
        </div>
      
    </header>
  )
}

export default Hero
