import React from 'react';
import '../components/Tiles.scss';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


// import { FaHeart, FaRegHeart } from 'react-icons/fa';
import axios from 'axios';

function Tiles({ title, fetchUrl }) {
	const baseURL = 'https://image.tmdb.org/t/p/original';
	const [movies, setMovies] = useState([]);

	// const [like, setLike] = useState(false);
	// const [saved, setSaved] = useState(false);

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchUrl);
			setMovies(request.data.results);
		}

		// window.localStorage.setItem("MY_FAVOURITE_MOVIE", JSON.stringify(fetchUrl))

		fetchData();
	}, [fetchUrl]);

	console.log(movies);

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

	//   const saveShow = async () => {

	//       setLike(!like);
	//       setSaved(true);
	//       await ( {
	//         savedShows: ({
	//           id: movie.id,
	//           title: movie.title,
	//           img: movie.backdrop_path,
	//         }),
	//       });

	// 	}

	return (
		<div className='tiles'>
			<h2 className='tiles_descript'>{title}</h2>
			<div className='wrapper'>
				<FontAwesomeIcon
					icon={faChevronLeft}
					className={`sliderChevron left ${!slidesNumber && 'hidden'}`}
					onClick={() => handleClick('left')}
				/>
				<div className='tiles_images' ref={refContainer}>
					{movies.map(movie => (
						<div key={movie.id} onClick={() => handleClick(movie)}>
							<div className='favourite'>
							
								{/* <p>
									<FaHeart className="heart"/>

									<FaRegHeart className="Reg_heart" />
								</p> */}
								<img
									src={`${baseURL}${movie?.backdrop_path}`}
									className='tiles_image'
									alt='{movie?.title || movie?.name || movie.original_title}'
								/>

								
							</div>
						</div>
					))}
				</div>
				<FontAwesomeIcon
					icon={faChevronRight}
					className='sliderChevron right'
					onClick={() => handleClick('right')}></FontAwesomeIcon>
			</div>
		</div>
	);
}

export default Tiles;
