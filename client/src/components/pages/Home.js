import React from 'react';
import styled from 'styled-components';
import MovieCard from '../layout/MovieCard';

const H1 = styled.h1`
  color: #b4c8d6;
`;

function Home() {
  return (
    <div>
      <H1>Home</H1>
      <MovieCard />
    </div>
  );
}

export default Home;
