import React, { useEffect, useState, Fragment } from 'react';
import MovieCard from './MovieCard';
import styled from 'styled-components';

const Grid = styled.div`
  display: flex;
  overflow-x: auto;
  margin-bottom: 2rem;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  background-color: #082032;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

const Container = styled.div`
  overflow: hidden;
  padding: 0 2rem;
  background-color: #082032;
  text-align: center;
  border-bottom: 2px groove #b4c8d6;
  margin-top: 30px;
`;

const H2 = styled.h2`
  color: #b4c8d6;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-bottom: 5rem;
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

const Border = styled.div`
  background-color: #ff4e00;
  background-image: linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%);
  height: 4px;
`;

function PopularList() {
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    getMovie();
    // eslint-disable-next-line
  }, [page]);

  const getMovie = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=${page}&api_key=f6302df7d7a747a2d83be49b4a21de55`
    );
    const movies = await response.json();
    setMovieList(movies.results);
  };

  return (
    <Fragment>
      <Container>
        <H2>Featured Movies</H2>
      </Container>
      <Grid>
        {movieList.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Grid>
      <ButtonWrapper>
        {page > 1 ? (
          <Fragment>
            <BtnPrev onClick={() => setPage(page - 1)}>Prev</BtnPrev>
            <BtnNxt onClick={() => setPage(page + 1)}>Next</BtnNxt>
          </Fragment>
        ) : (
          <BtnNxt onClick={() => setPage(page + 1)}>Next</BtnNxt>
        )}
      </ButtonWrapper>
      <Border />
    </Fragment>
  );
}

export default PopularList;
