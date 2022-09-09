import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTrendings } from "services/api"

export const Home = () => {
    const [films, setFilms] = useState([]);

      useEffect(() => {
        const fetchData = async () => {
            try {
              let response = getTrendings()
              let films = (await response).data.results
              setFilms(films)
              console.log(films);
            } catch (error) {
              console.log(error);
            }
          }
          fetchData().catch(console.error);
      }, [])



    return (
        <ul>
            {films.map(film => {
                return <li key={film.id}><Link to={`movies/${film.id}`}>{film.title}</Link></li>
            })}
        </ul>
    )
}