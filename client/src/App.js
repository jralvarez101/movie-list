import './App.css';
import { Fragment, useEffect } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import MyList from './components/pages/MyList';
import RegisterForm from './components/auth/RegisterForm';
import Login from './components/auth/Login';
import { Provider } from 'react-redux';
import store from './store';
import Footer from './components/layout/Footer';

const Container = styled.div`
  max-width: 100vw;
  margin: auto;
  overflow: hidden;
  /* padding: 0 2rem; */
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
              <Route exact path="/myList" component={MyList} />
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
