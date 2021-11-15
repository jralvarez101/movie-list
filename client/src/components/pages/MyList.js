import React, { Fragment, useState, useEffect, useRef } from 'react';
import SearchBox from '../layout/SearchBox';
import FavoritesList from '../movies/FavoritesList';
import SearchMovieResults from '../movies/SearchMovieResults';

function MyList() {
  const [movieResults, setMovieResults] = useState([]);
  const [page, setPage] = useState(1);
  const [passedQuery, setPassedQuery] = useState('');
  const [favorites, setFavorites] = useState([]);

  // Functions to set the state
  const next = () => setPage(page + 1);
  const prev = () => setPage(page - 1);
  const setPassedQueryState = (query) => {
    setPassedQuery(query);
  };
  const addToFavorites = (movie) => {
    const newFavorite = [...favorites, movie];
    setFavorites(newFavorite);
  };

  // To prevent useEffect from running on first render
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      searchMovieToWatch();
    } else {
      isMounted.current = true;
    }
  }, [page, passedQuery]);

  const searchMovieToWatch = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=f6302df7d7a747a2d83be49b4a21de55&language=en-US&page=${page}&include_adult=false&query=${passedQuery}`
    );
    const movies = await response.json();
    setMovieResults(movies.results);
  };

  return (
    <Fragment>
      <SearchBox setPassedQueryState={setPassedQueryState} />
      <SearchMovieResults
        movieResults={movieResults}
        prev={prev}
        next={next}
        page={page}
        addToFavorites={addToFavorites}
      />
      <FavoritesList favorites={favorites} />
    </Fragment>
  );
}

export default MyList;
