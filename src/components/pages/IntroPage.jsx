import styled from 'styled-components';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const IntroPage = () => {
  const navigate = useNavigate();
  return (
    <LayoutStyle>
      <h1>
        <span>S</span>een
      </h1>
      <p>
        気になるけど、まだ見ていない映画はありますか？
        <br />
        <br />
        見たいと感じたら、忘れてしまう前にマイリストに追加しましょう!
      </p>
      <Button
        size="large"
        variant="outlined"
        color="primary"
        onClick={() => {
          navigate('/home');
        }}
      >
        利用する
      </Button>
    </LayoutStyle>
  );
};

const LayoutStyle = styled.div`
  color: white;
  text-align: center;
  h1 {
    color: #5adaf6;
    font-family: RoundedMplus1cBold;
    font-size: 13rem;
    text-decoration-line: underline;
    margin: 4rem 0;
    span {
      color: #fb6a00;
    }
  }
  p {
    font-family: RoundedMplus1cBold;
    font-style: normal;
    font-weight: bold;
    font-size: 2rem;
    line-height: 2rem;
    text-align: center;
    text-transform: capitalize;
    margin: 5rem 0;
  }
`;
