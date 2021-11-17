import React, { useState } from 'react';
import styled from 'styled-components';
import img from '../../../src/images/poster2.jpg';

const Container = styled.div`
  background-image: url(${img});
  min-height: 100vh;
  position: relative;
  overflow: scroll;
`;

const FormWrapper = styled.div`
  background-color: #082032;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  max-width: 400px;
  min-width: 300px;
  /* min-height: 80%; */
  padding: 30px;
  border: 1px solid #718899;
  box-sizing: border-box;
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
  margin: 10px 0 10px 0;
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

function RegisterForm() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = user;
  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Registered submit for ', user);
  };
  return (
    <Container>
      <FormWrapper>
        <H1> Sign Up</H1>
        <form onSubmit={onSubmit}>
          <Label htmlFor="name"> Name</Label>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            placeholder="Enter Name"
            required
          />
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
          <Label htmlFor="password2">Confirm Password</Label>
          <Input
            id="password2"
            type="password"
            name="password2"
            value={password2}
            onChange={onChange}
            required
            minLength="6"
            placeholder="Confirm password"
          />
          <Button type="submit" value="Register" />
        </form>
      </FormWrapper>
    </Container>
  );
}

export default RegisterForm;
