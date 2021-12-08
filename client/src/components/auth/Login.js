import React, { useState, useEffect } from 'react';
import { useSelector, connect, useDispatch } from 'react-redux';
import { getMovies, clearMovies } from '../../actions/movieActions';
import { login, clearErrors } from '../../actions/authActions';
import styled from 'styled-components';
import Alert from '../layout/Alert';

const Container = styled.div`
  min-height: 90vh;
  position: relative;
  overflow: scroll;
`;

const FormWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  max-width: 400px;
  min-width: 300px;
  min-height: 70%;
  padding: 30px;
  border: 1px solid #b4c8d6;
  box-sizing: border-box;
  background-color: #082032;
`;

const H1 = styled.h1`
  color: #edf0f7;
  text-align: center;
  margin-bottom: 30px;
`;

const Label = styled.label`
  color: #b4c8d6;
  text-align: center;
  margin-bottom: 30px;
  font-size: large;
`;

const Input = styled.input`
  width: 90%;
  padding: 10px;
  margin: 10px 0 10px 0;
  background: #edf0f7;
  border: 1px solid #b4c8d6;
  border-radius: 5px;
  display: inline-block;
`;

const Button = styled.input`
  width: 97%;
  padding: 10px;
  margin: 20px 0 10px 0;
  background: #ff4c29;
  border: 1px solid #ff4c29;
  border-radius: 5px;
  display: inline-block;
  font-size: 20px;
  transition: all 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    border: 1px solid #fc8068;
    color: white;
    transform: scale(1.02);
  }
`;

function Login({ login, history }) {
  const [alert, setAlert] = useState('');
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const isAuthenticated = useSelector((state) => state.auth?.isAuthenticated);
  const error = useSelector((state) => state.auth?.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(clearMovies());
    }
    if (isAuthenticated) {
      history.push('/');
      dispatch(getMovies());
    }
    if (error) {
      setAlert(error);
      setTimeout(() => {
        setAlert('');
      }, 5000);
      clearErrors();
      setUser({
        email: '',
        password: '',
      });
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, history]);

  const { email, password } = user;
  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    login({
      email,
      password,
    });
  };
  return (
    <Container>
      <FormWrapper>
        {alert && <Alert message={alert} />}
        <H1>Account Login</H1>
        <form onSubmit={onSubmit}>
          <Label htmlFor="email"> Email</Label>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
            placeholder="Enter Email"
          />
          <Label htmlFor="password"> Password</Label>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
            minLength="6"
            placeholder="Enter Password"
          />
          <Button type="submit" value="Login" />
        </form>
      </FormWrapper>
    </Container>
  );
}

export default connect(null, { login, clearErrors, getMovies })(Login);
