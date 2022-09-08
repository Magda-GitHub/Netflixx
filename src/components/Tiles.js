import React from 'react';
import '../components/Tiles.scss';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FaHeart, FaRegHeart} from 'react-icons/fa';

import axios from 'axios';


function Tiles({ title, fetchUrl}  ) {
	
	const baseURL = 'https://image.tmdb.org/t/p/original';
	const [movie, setMovies] = useState([]);



	// const [favourite, setFavourite] = useState([]);


	// useEffect(() => {
	// 	const favourite = JSON.parse(localStorage.getItem("favourite"));
	// 	if (favourite) {
	// 		setFavourite(favourite);
	// 	}
	// }, [favourite]);
		
  
  

	// const API_KEY ="443297f22b4e7a9516d86e56389f76cc";



	// const URL_MOVIE ="https://api.themoviedb.org/3";
	


	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchUrl);
			setMovies(request.data.results);
		}


		fetchData();
	}, [fetchUrl]);

	console.log(movie);


	const [slidesNumber, setSlidesNumber] = useState(0);

	const refContainer = useRef(false);

	const handleClick = movie => {
		setSlidesNumber(1);

		if (refContainer.current) {
			const { scrollLeft, clientWidth } = refContainer.current;
			const scrollTo =
				movie === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;

			refContainer.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
		}
	};


	

	return (
		
		<>
				<div className='tiles'>
					<h2 className='tiles_descript'>{title}</h2>
					<div className='wrapper'>
					
						<FontAwesomeIcon
							icon={faChevronLeft}
							className={`sliderChevron left ${!slidesNumber && 'hidden'}`}
							onClick={() => handleClick('left')}
						/>

						<div
							
							className='tiles_images'
							ref={refContainer}  >
							{movie.map(movie => (
								<div key={movie.id} onClick={() => handleClick(movie)}>


									<button onClick="clickCounter()" type="button">
										 <FaHeart className="heart"  /></button>
										 



										 <button><FaRegHeart className="regHeart"/></button>
									<img
										src={`${baseURL}${movie?.backdrop_path}`}
										className='tiles_image'
										alt='{movie?.title || movie?.name || movie.original_title}'
										onClick={() => handleClick(movie)}
									/>
								</div>
								

							))}
						</div>
						<FontAwesomeIcon
							icon={faChevronRight}
							className='sliderChevron right'
							onClick={() => handleClick('right')}></FontAwesomeIcon>
					</div>
				</div>
				</>
	);

}
export default Tiles;
