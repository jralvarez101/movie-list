import React from 'react';
import styled from 'styled-components';

const H2 = styled.h2`
  font-size: 3em;
  font-weight: 700;
  margin: 0;
  color: #edf0f7;
  text-align: center;
`;

const TextWrap = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

function EmptyList() {
  return (
    <TextWrap>
      <H2>... Oh so empty</H2>
    </TextWrap>
  );
}

export default EmptyList;
