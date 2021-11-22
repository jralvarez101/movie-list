import React, { useEffect } from 'react';
import { loadUser } from '../../actions/authActions';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import PopularList from '../movies/PopularList';

const H1 = styled.h1`
  color: #b4c8d6;
`;

function Home() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth?.loading);

  useEffect(() => {
    if (loading) dispatch(loadUser());
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <H1>Home</H1>
      <PopularList />
    </div>
  );
}

export default Home;
