import React from 'react';
import "../components/Tiles.scss";
import { useState, useEffect } from "react";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
// import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
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
      );

  return (
  <div className="tiles">
      <h2 className="tiles_descript">{title}</h2>
      {/* <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon> */}
        <div className="tiles_images">
            {movies.map((movie) => (
            <div key={movie.id}>
            
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} className="tiles_images" alt="{movie?.title || movie?.name || movie.original_title}" />
            
      </div>
      
      ))}
     </div>
     {/* <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon> */}
    </div>
  );
}


export default Tiles
