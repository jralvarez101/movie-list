import React, { useEffect, Fragment } from 'react';
import { loadUser } from '../../actions/authActions';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import PopularList from '../movies/PopularList';
import HomeBanner from '../layout/HomeBanner';

function Home() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth?.loading);

  useEffect(() => {
    if (loading) dispatch(loadUser());
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <ToastContainer />
      <HomeBanner />
      <PopularList />
    </Fragment>
  );
}

export default Home;
