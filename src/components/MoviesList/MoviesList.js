import { Link, useLocation } from "react-router-dom";

export const MoviesList = ({ movies }) => {
    const location = useLocation();
    return (
        <ul>
            {movies.map((movie) => {
                return <li key={movie.id}><Link to={`${movie.id}`} state={{ from: location }}>{movie.title}</Link></li>
            })}
        </ul>
    )
}