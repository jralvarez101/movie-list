import React from 'react';
import styled from 'styled-components';
import img from '../../images/homeImage1.jpg';

const MainContainer = styled.div`
  background-image: linear-gradient(to right, #09203f, #537895, transparent 60%),
    url(${img});
  min-height: 60vh;
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  position: relative;
`;

const H1 = styled.h1`
  font-size: 3rem;
  color: #edf0f7;
  font-weight: bold;
  padding: 2rem;
  max-width: 30%;
`;

const P = styled.p`
  padding: 2rem;
  font-size: 1.5rem;
  color: #edf0f7;
  max-width: 30%;
`;

function HomeBanner() {
  return (
    <MainContainer>
      <H1>Discover New Movies</H1>
      <P>Browse through millions of movies and create your list!</P>
    </MainContainer>
  );
}

export default HomeBanner;
