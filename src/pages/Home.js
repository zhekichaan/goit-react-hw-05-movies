import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getTrendings } from "services/api"

const Home = () => {
  const [films, setFilms] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = getTrendings()
        let films = (await response).data.results
        setFilms(films)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData().catch(console.error);
  }, [])

  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {films.map(film => {
          return <li key={film.id}><Link to={`movies/${film.id}`} state={{ from: location }}>{film.title}</Link></li>
        })}
      </ul>
    </>
  )
}

export default Home