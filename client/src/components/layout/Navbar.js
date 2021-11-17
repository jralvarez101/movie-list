import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faBars } from '@fortawesome/free-solid-svg-icons';

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

  return (
    <Nav>
      <BrandLink to="/">
        <H2>
          <Logo icon={faFilm} size="lg" />
          <span>My Movie List</span>
        </H2>
      </BrandLink>
      <Bars icon={faBars} size="lg" onClick={() => setIsOpen(!isOpen)} />
      <Menu isOpen={isOpen}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/myList">My List</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </Menu>
    </Nav>
  );
}

export default Navbar;
