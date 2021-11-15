import React, { Fragment } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Text = styled.span`
  margin-right: 1.5rem;
  color: white;
`;

const Heart = styled(FontAwesomeIcon)`
  color: red;
  margin-right: 1.5rem;
`;

function AddFavorites() {
  return (
    <Fragment>
      <Text>Add to Favorites</Text>
      <Heart icon={faHeart} />
    </Fragment>
  );
}

export default AddFavorites;
