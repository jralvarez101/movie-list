import './App.css';
import { Fragment, useEffect } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import { Provider } from 'react-redux';
import store from './store';

const Container = styled.div`
  max-width: 1100px;
  margin: auto;
  overflow: hidden;
  padding: 0 2rem;
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
            </Switch>
          </Container>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
