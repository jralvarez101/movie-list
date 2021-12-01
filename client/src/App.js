import './App.css';
import { Fragment, useEffect } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from '../src/components/routing/PrivateRoute';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import MyList from './components/pages/MyList';
import RegisterForm from './components/auth/RegisterForm';
import Login from './components/auth/Login';
import { Provider } from 'react-redux';
import store from './store';
import Footer from './components/layout/Footer';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const Container = styled.div`
  max-width: 100vw;
  margin: auto;
  overflow: hidden;
`;

const App = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#2C394B';
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Container>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <PrivateRoute exact path="/myList" component={MyList} />
              <Route exact path="/register" component={RegisterForm} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </Container>
        </Fragment>
      </Router>
      <Footer />
    </Provider>
  );
};

export default App;
