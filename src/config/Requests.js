// https://api.themoviedb.org/3

// cle 443297f22b4e7a9516d86e56389f76cc

const API_KEY ="443297f22b4e7a9516d86e56389f76cc";

const baseURL ="https://api.themoviedb.org/3";

const requests = {
    fetchTrending: `${baseURL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `${baseURL}/discover/tv?api_key=${API_KEY}$with_networks=213`,
    fetchTopRated: `${baseURL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genre=28`,
    fetchComedyMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genre=35`,
    // fetchHorrorMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genre=27`,
    // fetchRomanceMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genre=10749`,
    // fetchDocumentaries: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genre=99`,
}

export default requests;