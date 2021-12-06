import React, { useState } from 'react';
import styled from 'styled-components';
import img from '../../../src/images/movie3.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)),
    url(${img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  min-height: 40vh;
  position: relative;
  height: 100%;
`;

const ContentWrapper = styled.div`
  max-width: 1100px;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: white;
  align-items: flex-start;
  position: absolute;
  padding-top: 30px;
  padding-bottom: 30px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const H2 = styled.h2`
  font-size: 3em;
  font-weight: 700;
  margin: 0;
`;

const H3 = styled.h3`
  font-size: 2em;
  font-weight: 600;
  margin: 0;
`;

const SearchInputDiv = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  margin-top: 2em;
  width: 90%;
  border: 3px solid #ff4c29;
  border-right: none;
  padding: 5px;
  height: 20px;
  border-radius: 25px 0 0 25px;
  outline: none;
  color: #9dbfaf;
  &:focus {
    color: black;
    font-weight: bold;
  }
`;

const SearchButton = styled.button`
  width: 40px;
  height: 36px;
  border: 1px solid #ff4c29;
  background: #ff4c29;
  text-align: center;
  color: #fff;
  border-radius: 0 25px 25px 0;
  cursor: pointer;
  font-size: 20px;
  margin-top: 26px;
`;

function SearchBox({ setPassedQueryState }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setPassedQueryState(query);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <SearchContainer>
      <ContentWrapper>
        <H2>Welcome</H2>
        <H3>Thousands of movies to discover, search now!</H3>
        <SearchInputDiv>
          <SearchInput
            type="text"
            placeholder="Enter the name of your next movie..."
            value={query}
            onKeyDown={(e) => handleKeyDown(e)}
            onChange={(e) => setQuery(e.target.value)}
          />
          <SearchButton onClick={handleSubmit}>
            <FontAwesomeIcon icon={faSearch} />
          </SearchButton>
        </SearchInputDiv>
      </ContentWrapper>
    </SearchContainer>
  );
}

export default SearchBox;
