import React, { useState } from 'react';
import styled from 'styled-components';

const Img = styled.img`
  width: 100%;
`;

const Card = styled.div`
  min-width: 300px;
  margin: 1rem;
  border-radius: 3px;
  box-shadow: 0.2px 4px 5px rgba(0, 0, 0, 0.1);
  background-color: #334756;
  position: relative;
  overflow: hidden;
`;

const Info = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;

const Rating = styled.span`
  background-color: #082032;
  padding: 0.25rem 0.5rem;
  border-radius: 3px;
  font-weight: bold;
  color: lightgreen;
`;

const Overview = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 1rem;
  background-color: #edf0f7;
  transform: ${(props) =>
    props.isShown ? 'translateY(0%)' : 'translateY(101%)'};
  max-height: 100%;
  transition: transform 0.3s ease-in;
`;

function MovieCard(props) {
  const { poster_path, title, vote_average, overview } = props.movie;
  const [isShown, setIsShown] = useState(false);

  return (
    <Card
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(!isShown)}
    >
      <Img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={`poster for ${title}`}
      />
      <Info>
        <h3>{title}</h3>
        <Rating>{vote_average}</Rating>
      </Info>
      <Overview isShown={isShown}>
        <h3>Overview</h3>
        {overview}
      </Overview>
    </Card>
  );
}

export default MovieCard;
