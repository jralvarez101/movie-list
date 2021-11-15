import React from 'react';
import styled from 'styled-components';
import PopularList from '../movies/PopularList';

const H1 = styled.h1`
  color: #b4c8d6;
`;

function Home() {
  return (
    <div>
      <H1>Home</H1>
      <PopularList />
    </div>
  );
}

export default Home;
