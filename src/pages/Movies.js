import { useState, useEffect } from "react"
import { findMovie } from "services/api"
import { useSearchParams } from "react-router-dom";
import { MoviesList } from "components/MoviesList/MoviesList";
import { SearchBox } from "components/SearchBox";

const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])

    const submitHandler = async (e) => {
        if(query !== '') {
            e.preventDefault()
            let response = findMovie(query)
            let movies = (await response).data.results
            setSearchParams({
                query: query
            })
            setMovies(movies)
        }
    }

    const inputHandler = (e) => {
        const value = e.target.value
        setQuery(value)
    }

    useEffect(() => {
        if(searchParams.get('query')) {
            setQuery(searchParams.get('query'))
            const getMovies = async () => {
                let response = findMovie(searchParams.get('query'))
                let movies = (await response).data.results
                setMovies(movies)
            }
            getMovies()
        }
    }, [searchParams]);

    return (
        <div>
            <SearchBox onSubmit={submitHandler}>
                <input 
                    type="text" 
                    onChange={inputHandler}
                    value={query}
                />
                <button type="submit">Search</button>
            </SearchBox>
            <MoviesList movies={movies} />
        </div>
    )
}

export default Movies


