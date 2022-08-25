import React from 'react';
import "../components/Tiles.scss";
import { useState, useEffect, useRef } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import axios from "axios";


function Tiles({ title, fetchUrl }) {
    const baseURL ="https://image.tmdb.org/t/p/original";
    const [movies, setMovies] = useState([]);
     

    useEffect(() => {
        async function fetchData(){
          const request = await axios.get(fetchUrl);
            setMovies(request.data.results);

       
      }
      fetchData ();
      }, 
      [fetchUrl]);

      console.log(movies);



    const [slidesNumber, setSlidesNumber] = useState(0)

    const refContainer = useRef(false);

    const handleClick = (direction: string) => {

      setSlidesNumber(true)

      if (refContainer.current) {
        const {scrollLeft, clientWidth } = refContainer.current
        const scrollTo =
        direction === "left" 
        ? scrollLeft - clientWidth
        : scrollLeft + clientWidth

        refContainer.current.scrollTo({ left: scrollTo, behavior: "smooth"})

      }
    }
      

  return (
  <div className="tiles">
      <h2 className="tiles_descript">{title}</h2>
      <div className="wrapper">
      <FontAwesomeIcon icon={faChevronLeft} className={`sliderChevron left ${!slidesNumber && "hidden"}`}
       onClick={() => handleClick("left")} />
        <div className="tiles_images" ref={refContainer}>
            {movies.map((movie) => (
            <div key={movie}>
            
            <img src={`${baseURL}${movie.backdrop_path}`} className="tiles_image" alt="{movie?.title || movie?.name || movie.original_title}" />
            
      </div>
      
      ))}
      
     </div>
     <FontAwesomeIcon icon={faChevronRight} className ="sliderChevron right" onClick={() => handleClick("right")}></FontAwesomeIcon>
    </div>
    </div>
  );
}


export default Tiles
