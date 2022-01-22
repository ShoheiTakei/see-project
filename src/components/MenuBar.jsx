import * as React from 'react';
import styled from 'styled-components';
import {
  faHome,
  faSearch,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

export const MenuBar = () => {
  const ArrayIcons = {
    1: {
      url: '/home',
      icon: faHome,
    },
    2: {
      url: '/home/search',
      icon: faSearch,
    },
    3: {
      url: '/home/profile',
      icon: faUserCircle,
    },
  };

  return (
    <TopMenu>
      {ArrayIcons.map((icon, key) => (
        <IconButton className={`${icon}Button`} aria-label="Example">
          <FontAwesomeIcon className={icon} icon={icon} key={key} />
        </IconButton>
      ))}
    </TopMenu>
  );
};

const TopMenu = styled.div`
width:100%;
height:5rem;
&:faHomeButton, faSearchButton, faUserCircleButton{
  background:red;
}
}`;
