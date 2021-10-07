import React, { useState } from 'react';
import styled from 'styled-components';

const Img = styled.img`
  width: 100%;
`;

const Card = styled.div`
  width: 300px;
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

function MovieCard() {
  const [isShown, setIsShown] = useState(false);
  const ShowEnter = () => {
    setIsShown(true);
    console.log('card is hovered');
  };

  const ShowLeave = () => {
    setIsShown(false);
    console.log('card is not hovered');
  };
  return (
    <Card onMouseEnter={ShowEnter} onMouseLeave={ShowLeave}>
      <Img
        src="https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80"
        alt="movie poster"
      />
      <Info>
        <h3>Movie Title</h3>
        <Rating>9.8</Rating>
      </Info>
      <Overview isShown={isShown}>
        <h3>Overview</h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, maiores.
        Mollitia laudantium voluptatem minima! Doloremque eligendi aperiam
        explicabo culpa nihil dicta alias voluptates assumenda esse illo odit,
        non maxime accusamus!
      </Overview>
    </Card>
  );
}

export default MovieCard;
