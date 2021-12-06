import React, { Fragment } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Text = styled.span`
  margin-right: 1.5rem;
  color: white;
`;

const Heart = styled(FontAwesomeIcon)`
  color: red;
  margin-right: 1.5rem;
`;

function DeleteFromList() {
  return (
    <Fragment>
      <Text>Remove from List</Text>
      <Heart icon={faTrash} />
    </Fragment>
  );
}

export default DeleteFromList;
