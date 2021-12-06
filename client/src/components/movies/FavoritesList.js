import React, { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteMovie } from '../../actions/movieActions';
import styled from 'styled-components';
import ListMovieCard from './ListMovieCard';
import FilterSearch from '../layout/FilterSearch';
import EmptyList from '../layout/EmptyList';

const ResultsGrid = styled.div`
  display: flex;
  overflow-x: auto;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

const Container = styled.div`
  padding: 20px 5px 3px 5px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`;

const H3 = styled.h2`
  margin-left: 10px;
  color: #edf0f7;
`;

function FavoritesList() {
  const movies = useSelector((state) => state.movie?.movies);
  console.log(movies);
  const dispatch = useDispatch();

  // filter through movies
  const [searchTerm, setSearchTerm] = useState('');
  const filteredResults = (inputSearch) => setSearchTerm(inputSearch);

  const filteredMovies = movies.filter((movie) => {
    const lowercaseMovieTitle = movie.title?.toLowerCase() ?? '';

    return lowercaseMovieTitle.includes(searchTerm.toLowerCase());
  });
  const handleClick = (movie) => {
    dispatch(deleteMovie(movie._id));
    console.log('I was clicked', movie);
  };

  return (
    <Fragment>
      <Container>
        <H3>My List</H3>
        <FilterSearch filteredResults={filteredResults} />
      </Container>
      <ResultsGrid>
        {!movies.length ? (
          <EmptyList />
        ) : (
          filteredMovies.map((movie) => (
            <ListMovieCard
              key={movie.id}
              movie={movie}
              handleClick={() => handleClick(movie)}
            />
          ))
        )}
      </ResultsGrid>
    </Fragment>
  );
}

export default FavoritesList;
