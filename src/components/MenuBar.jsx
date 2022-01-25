import * as React from 'react';
import styled from 'styled-components';
import {
  faHome,
  faSearch,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';

export const MenuBar = () => {
  // 後で、iconクリック時の遷移先修正する
  const navigate = useNavigate();
  const ArrayIcons = [faHome, faSearch, faUserCircle];
  const ArrayUrl = ['/', '/home/search', '/home/profile'];

  return (
    <TopMenu>
      {ArrayIcons.map((icon, key) => (
        <IconButton
          key={key}
          className={`${icon}Button`}
          aria-label="Example"
          onClick={() => {
            navigate(ArrayUrl[key]);
          }}
        >
          <FontAwesomeIcon icon={icon} key={key} />
        </IconButton>
      ))}
    </TopMenu>
  );
};

const TopMenu = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;

  svg {
    height: 4rem;
    color: white;
  }
  .svg-inline--fa {
    width: 4rem;
  }
`;
