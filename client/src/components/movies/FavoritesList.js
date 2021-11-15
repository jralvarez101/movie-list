import React, { Fragment } from 'react';
import styled from 'styled-components';
import ListMovieCard from './ListMovieCard';
import FilterSearch from '../layout/FilterSearch';

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
`;

const H3 = styled.h2`
  margin-left: 30px;
  color: #edf0f7;
`;

function FavoritesList({ favorites }) {
  console.log(favorites);
  return (
    <Fragment>
      <Container>
        <H3>Your List</H3>
        <FilterSearch />
      </Container>
      <ResultsGrid>
        {favorites.map((movie) => (
          <ListMovieCard key={movie.id} movie={movie} />
        ))}
      </ResultsGrid>
    </Fragment>
  );
}

export default FavoritesList;
