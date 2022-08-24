import axios from "axios"

const Tiles = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

export default Tiles