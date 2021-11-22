import React, { Fragment } from 'react';
import styled from 'styled-components';

const SearchInputDiv = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  margin-top: 0.75em;
  width: 90%;
  border: 3px solid #718899;
  padding: 5px;
  height: 20px;
  border-radius: 25px;
  outline: none;
  color: #9dbfaf;
  &:focus {
    color: black;
    font-weight: bold;
  }
`;

function FilterSearch({ filteredResults }) {
  const handleChange = (e) => {
    filteredResults(e.target.value);
  };
  return (
    <Fragment>
      <SearchInputDiv>
        <SearchInput
          onChange={handleChange}
          placeholder="filter through your list ..."
        />
      </SearchInputDiv>
    </Fragment>
  );
}

export default FilterSearch;
