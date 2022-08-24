import React from 'react';
import "../components/Tiles.scss";
import { useState, useEffect, useRef } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import axios from "axios";


function Tiles({title, fetchUrl}) {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData(){
          const request = await axios.get(fetchUrl);
            setMovies( request.data.results);

       
      }
      fetchData ();
      }, 
      [fetchUrl]);

      console.log(movies);



    const [slidesNumber, setSlidesNumber] = useState(0)

    const listRef = useRef(null) 

    const handleClick = (direction) => {
      
      let distance = listRef.current.getBoundingClientRect().x - 30;
      if(direction === "left" && slidesNumber > 0){
        setSlidesNumber(slidesNumber - 1);
        listRef.current.style.transform = `translateX(${329 + distance}px)`;
      }

      if(direction === "right"&& slidesNumber < 4){
        setSlidesNumber(slidesNumber + 1);
        listRef.current.style.transform = `translateX(${-329 + distance}px)`
      }

    };

  return (
  <div className="tiles">
      <h2 className="tiles_descript">{title}</h2>
      <div className="wrapper">
      <FontAwesomeIcon icon={faChevronLeft} className="sliderChevron left" onClick={() => handleClick("left")} />
        <div className="tiles_images" ref={listRef}>
            {movies.map((movie) => (
            <div key={movie.id}>
            
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} className="tiles_images" alt="{movie?.title || movie?.name || movie.original_title}" />
            
      </div>
      
      ))}
     </div>
     <FontAwesomeIcon icon={faChevronRight} className ="sliderChevron right" onClick={() => handleClick("right")}></FontAwesomeIcon>
    </div>
    </div>
  );
}


export default Tiles
