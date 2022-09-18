import { Box } from "components/Box";
import { useEffect, useState, Suspense } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieDetails } from "services/api"
import { StyledLink, Poster, DetailsLink } from "./MovieDetails.styled";

const MovieDetails = () => {
    const { id } = useParams()
    const location = useLocation();

    const [filmTitle, setFilmTitle] = useState('')
    const [filmYear, setFilmYear] = useState('')
    const [filmPoster, setFilmPoster] = useState('')
    const [filmScore, setFilmScore] = useState('')
    const [filmOverview, setFilmOverview] = useState('')
    const [filmGenres, setFilmGenres] = useState([])

    const backLinkHref = location.state?.from ?? "/products";

    useEffect(() => {
      const getDetails = async (id) => {
        try {
          let response = getMovieDetails(id)
          let filmData = (await response).data
          setFilmTitle(filmData.title)
          setFilmYear(filmData.release_date.slice(0, 4))
          setFilmPoster(filmData.poster_path)
          setFilmScore(`${Math.round((filmData.vote_average * 100) / 10)}%`)
          setFilmOverview(filmData.overview)
          setFilmGenres(filmData.genres)
        } catch (error) {
          console.log(error);
        }
      }
      getDetails(id)
    }, [id])

    return (
        <Box>
          <StyledLink to={backLinkHref}>🠔 Go back</StyledLink>
          <Box display="flex" borderY="1px solid black" py="15px">
          <Box marginRight="30px">
            {filmPoster && <Poster src={`https://image.tmdb.org/t/p/w500${filmPoster}`} alt="" />}
          </Box>
          <Box display="grid" py="20px">
          {filmTitle && <h2>{filmTitle} ({filmYear})</h2>}
          {filmScore && <p>User Score: {filmScore}</p>}
          <h3>Overview</h3>
          {filmOverview && <p>{filmOverview}</p>}
          <h3>Genres</h3>
          {filmGenres.map((genre) => {
              return <p key={genre.id}>{genre.name}</p>
            })}
          </Box>
          </Box>
          <Box p="20px" display="inline-grid" gridGap="8px">
            <DetailsLink to="cast" state={{ from: backLinkHref }}>Cast</DetailsLink>
            <DetailsLink to="reviews" state={{ from: backLinkHref }}>Reviews</DetailsLink>
          </Box>
          <Box>
          <Suspense fallback={<div>Loading subpage...</div>}>
            <Outlet />
          </Suspense>
          </Box>
        </Box>
    )
}

export default MovieDetails;

