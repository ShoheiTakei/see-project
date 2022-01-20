import styled from 'styled-components';
import { Button } from '@mui/material';

export const IntroPage = () => {
  return (
    <LayoutStyle>
      <h1>Seen</h1>
      <p>
        気になるけど、まだ見ていない映画はありますか？
        見たいと感じたら、忘れてしまう前にマイリストに追加しましょう！
      </p>
      <Button variant="contained">利用する</Button>
    </LayoutStyle>
  );
};

const LayoutStyle = styled.div`
  color: white;
  background: #060606de;
  width: 100%;
  height: 100%;
  text-align: center;
  h1 {
    color: #5adaf6;
    font-family: Rounded Mplus 1c Bold;
    font-size: 14.5rem;
    text-decoration-line: underline;
    text-transform: capitalize;
  }
  p {
    font-family: Rounded Mplus 1c Bold;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 53px;
    text-align: center;
    text-transform: capitalize;
  }
`;
