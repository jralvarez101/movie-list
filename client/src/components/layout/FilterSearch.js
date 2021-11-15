import React, { Fragment } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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

function FilterSearch() {
  return (
    <Fragment>
      <SearchInputDiv>
        <SearchInput />
        <SearchButton>
          <FontAwesomeIcon icon={faSearch} />
        </SearchButton>
      </SearchInputDiv>
    </Fragment>
  );
}

export default FilterSearch;
