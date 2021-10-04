import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import ToggleNav from './ToggleNav';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #082032;
  padding: 0px 20px;
  color: #718899;
  position: relative;
  ${({ menuIconClicked }) =>
    menuIconClicked &&
    css`
      height: 150px;
      align-items: flex-start;
    `}
`;

const Logo = styled(FontAwesomeIcon)`
  color: #ff4c29;
`;

const H1 = styled.h1`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  @media (max-width: 500px) {
    position: absolute;
    visibility: ${({ menuIconClicked }) =>
      menuIconClicked ? `visible` : `hidden`};
  }

  ${({ menuIconClicked }) =>
    menuIconClicked &&
    css`
      display: flex;
      flex-direction: column;
      top: 70px;
      visibility: visible;
      left: 80px;
    `};
`;

const Li = styled.li`
  list-style: none;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #718899;
  padding: 1rem;
  margin-top: ${({ menuIconClicked }) => (menuIconClicked ? `5px` : `0`)};
  &:hover {
    color: white;
  }
`;

const BrandLink = styled(Link)`
  text-decoration: none;
  color: #718899;
`;

const ToggleWrapper = styled.div`
  @media (min-width: 500px) {
    display: none;
  }
  ${({ menuIconClicked }) =>
    menuIconClicked &&
    css`
      margin-top: 25px;
    `}
`;

const Navbar = () => {
  const [menuIconClicked, setMenuIconClicked] = useState(false);

  const toggleNavigation = (e) => {
    menuIconClicked ? setMenuIconClicked(false) : setMenuIconClicked(true);
  };

  return (
    <Nav menuIconClicked={menuIconClicked}>
      <BrandLink to="/">
        <H1>
          <Logo icon={faFilm} size="lg" />
          <div>My Movie List</div>
        </H1>
      </BrandLink>
      <div>
        <Ul menuIconClicked={menuIconClicked}>
          <Li>
            <NavLink to="/" menuIconClicked={menuIconClicked}>
              Home
            </NavLink>
          </Li>
          <Li>
            <NavLink to="/about" menuIconClicked={menuIconClicked}>
              About
            </NavLink>
          </Li>
        </Ul>
      </div>
      <ToggleWrapper
        onClick={toggleNavigation}
        menuIconClicked={menuIconClicked}
      >
        <ToggleNav toggleOn={menuIconClicked} />
      </ToggleWrapper>
    </Nav>
  );
};

export default Navbar;
