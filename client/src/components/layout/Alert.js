import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const AlertDiv = styled.div`
  background-color: red;
  color: white;
  padding: 2px;
  border-radius: 5px;
  text-align: center;
`;

const Icon = styled(FontAwesomeIcon)`
  color: white;
`;

function Alert({ message }) {
  return (
    <AlertDiv>
      <Icon icon={faInfoCircle} />
      <span> {message}</span>
    </AlertDiv>
  );
}

export default Alert;
