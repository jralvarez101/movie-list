import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({
  isAuthenticated,
  loading,
  component: Component,
  ...rest
}) => {
  const notAuthenticated = !isAuthenticated && !loading;

  if (notAuthenticated) return <Redirect to="/login" />;

  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    loading: state.auth.loading,
  };
};

export default connect(mapStateToProps)(PrivateRoute);
