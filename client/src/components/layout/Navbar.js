import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faBars } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { connect, useDispatch } from 'react-redux';
import { logout } from '../../actions/authActions';

const Nav = styled.div`
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #082032;
  flex-wrap: wrap;
`;

const Logo = styled(FontAwesomeIcon)`
  color: #ff4c29;
`;

const BrandLink = styled(Link)`
  text-decoration: none;
  color: #718899;
`;

const H2 = styled.h2`
  display: flex;
  gap: 0.7rem;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
    transition: max-height 0.3s ease-in;
  }
`;

const Span = styled.span`
  color: #718899;
  padding: 1rem 2rem;
  text-align: center;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #718899;
  padding: 1rem 2rem;
  text-align: center;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  &:hover {
    color: #b4c8d6;
  }
`;

const Bars = styled(FontAwesomeIcon)`
  color: #718899;
  cursor: pointer;
  @media (min-width: 769px) {
    display: none;
  }
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth?.isAuthenticated);
  const user = useSelector((state) => state.auth?.user);
  const dispatch = useDispatch();

  const toLogOut = () => {
    dispatch(logout());
  };

  const authLinks = (
    <Fragment>
      {<Span>Hello {user && user.name},</Span>}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/myList">My List</NavLink>
      <NavLink onClick={toLogOut} to="#!">
        Logout
      </NavLink>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
    </Fragment>
  );

  return (
    <Nav>
      <BrandLink to="/">
        <H2>
          <Logo icon={faFilm} size="lg" />
          <span>My Movie List</span>
        </H2>
      </BrandLink>
      <Bars icon={faBars} size="lg" onClick={() => setIsOpen(!isOpen)} />
      <Menu isOpen={isOpen}>{isAuthenticated ? authLinks : guestLinks}</Menu>
    </Nav>
  );
}

export default connect(null, { logout })(Navbar);
