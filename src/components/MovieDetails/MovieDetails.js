import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "services/api"


export const MovieDetails = () => {

    const { id } = useParams()

    const [filmTitle, setFilmTitle] = useState('')
    const [filmYear, setFilmYear] = useState('')
    const [filmPoster, setFilmPoster] = useState('')
    const [filmScore, setFilmScore] = useState('')
    const [filmOverview, setFilmOverview] = useState('')
    const [filmGenres, setFilmGenres] = useState({})
    
    //vote_average
    //overview
    //genres (obj)
    //https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg
    //poster_path

   
      useEffect(() => {

        const getMovieDetails = async (id) => {
            try {
                let response = getMovie(id)
                let filmData = (await response).data
                console.log(filmData);
                setFilmTitle(filmData.title)
                setFilmYear(filmData.release_date.slice(0, 4))
                setFilmPoster(filmData.poster_path)
                setFilmScore(`${Math.round((filmData.vote_average * 100) / 10)}%`)
                
                setFilmOverview(filmData.overview)
                setFilmGenres(filmData.genres)
            } catch (error) {
                
            }
          }
        
        getMovieDetails(id)
      }, [id])


    return (
        <div>
          <img src={`https://image.tmdb.org/t/p/w500${filmPoster}`} alt="" />
            <h2>{filmTitle} ({filmYear})</h2>
            <p>{filmScore}</p>
            <p>{filmOverview}</p>
            {filmGenres.map(genre => <p>{genre.name}</p>)}
            {/* <p>{filmGenres}</p> */}
        </div>
    )
}