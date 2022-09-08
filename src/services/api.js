import axios from "axios"

export const getTrendings = () => {
    axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=3885212db9ae31e509f05690ec6286df').then(r => console.log(r.data))
}