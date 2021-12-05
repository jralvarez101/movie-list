import React, { Fragment } from 'react';
import styled from 'styled-components';
import ListMovieCard from './ListMovieCard';
import { addMovie } from '../../actions/movieActions';
import { useDispatch } from 'react-redux';

const ResultsGrid = styled.div`
  display: flex;
  overflow-x: auto;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  background-color: #edf0f7;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

const Container = styled.div`
  background-color: #edf0f7;
  padding: 20px 5px 3px 5px;
`;

const BtnContainer = styled.div`
  background-color: #edf0f7;
  padding: 0 20px 20px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`;

const H3 = styled.h2`
  margin-left: 30px;
  color: #2c394b;
`;

const BtnPrev = styled.button`
  border: 0;
  outline: none;
  font-size: 16px;
  line-height: 1;
  padding: 16px 30px;
  border-radius: 25px;
  background-color: #082032;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease-in;
  &:hover {
    background-color: #ff4c29;
    color: #082032;
  }
`;

const BtnNxt = styled.button`
  border: 0;
  outline: none;
  font-size: 16px;
  line-height: 1;
  padding: 16px 30px;
  border-radius: 25px;
  background-color: #082032;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease-in;
  &:hover {
    background-color: #ff4c29;
    color: #082032;
  }
`;

function SearchMovieResults({ movieResults, prev, next, page }) {
  const dispatch = useDispatch();

  const addToFavorites = (movie) => {
    const movieInfo = {
      id: movie.id,
      title: movie.title,
      vote_average: movie.vote_average,
      overview: movie.overview,
      poster_path: movie.poster_path,
    };
    dispatch(addMovie(movieInfo));
  };

  return (
    <Fragment>
      <Container>
        <H3>Search Results</H3>
      </Container>
      <ResultsGrid>
        {movieResults.map((movie) => (
          <ListMovieCard
            key={movie.id}
            movie={movie}
            handleClick={() => addToFavorites(movie)}
          />
        ))}
      </ResultsGrid>
      <BtnContainer>
        {page > 1 ? (
          <Fragment>
            <BtnPrev onClick={prev}>Prev</BtnPrev>
            <BtnNxt onClick={next}>Next</BtnNxt>
          </Fragment>
        ) : (
          <BtnNxt onClick={next}>Next</BtnNxt>
        )}
      </BtnContainer>
    </Fragment>
  );
}

export default SearchMovieResults;
