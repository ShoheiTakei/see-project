import styled from 'styled-components';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { MenuBar } from '../MenuBar';

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <MenuBar />
      <h1>ホームページです</h1>
      <Button
        size="large"
        variant="outlined"
        color="primary"
        onClick={() => {
          navigate('/');
        }}
      >
        イントロぺーじ戻る
      </Button>
    </div>
  );
};
