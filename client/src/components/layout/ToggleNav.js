import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';

function ToggleNav(props) {
  if (props.toggleOn) {
    return <FontAwesomeIcon icon={faTimes} />;
  } else {
    return <FontAwesomeIcon icon={faBars} />;
  }
}

export default ToggleNav;
