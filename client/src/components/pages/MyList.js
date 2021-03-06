import React, { Fragment, useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchBox from '../layout/SearchBox';
import FavoritesList from '../movies/FavoritesList';
import SearchMovieResults from '../movies/SearchMovieResults';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { clearMovieErrors } from '../../actions/movieActions';

function MyList() {
  const [movieResults, setMovieResults] = useState([]);
  const [page, setPage] = useState(1);
  const [passedQuery, setPassedQuery] = useState('');

  // Functions to set the state
  const next = () => setPage(page + 1);
  const prev = () => setPage(page - 1);
  const setPassedQueryState = (query) => {
    setPassedQuery(query);
    setPage(1);
  };

  // Launching and clearing error & notification
  const error = useSelector((state) => state.movie?.error);

  const dispatch = useDispatch();
  // toast alert
  const notify = () =>
    toast.warn(error, {
      position: toast.POSITION.TOP_CENTER,
    });

  if (error) {
    notify();
    dispatch(clearMovieErrors());
  }

  // To prevent useEffect from running on first render
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      searchMovieToWatch();
    } else {
      isMounted.current = true;
      defaultSearch();
    }

    // eslint-disable-next-line
  }, [page, passedQuery]);

  const defaultSearch = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US&page=${page}`
    );
    const movies = await response.json();
    setMovieResults(movies.results);
  };

  const searchMovieToWatch = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US&page=${page}&include_adult=false&query=${passedQuery}`
    );
    const movies = await response.json();
    setMovieResults(movies.results);
  };

  return (
    <Fragment>
      <SearchBox setPassedQueryState={setPassedQueryState} />
      <ToastContainer />
      <SearchMovieResults
        movieResults={movieResults}
        prev={prev}
        next={next}
        page={page}
      />
      <FavoritesList />
    </Fragment>
  );
}

export default MyList;
