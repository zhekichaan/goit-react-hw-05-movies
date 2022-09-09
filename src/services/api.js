import axios from "axios"

export const getTrendings = () => {
    const response = axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=3885212db9ae31e509f05690ec6286df')
    return response
}

export const getMovie = (id) => {
    const response = axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=3885212db9ae31e509f05690ec6286df`)
    return response
}