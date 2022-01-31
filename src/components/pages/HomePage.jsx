import styled from 'styled-components';
import { Button } from '@mui/material';
import { MenuBar } from '../MenuBar';
import { useEffect, useState } from 'react';
// import { db } from '../../../apis/firebase/config';
// import { doc, onSnapshot } from 'firebase/firestore';

export const HomePage = () => {
  const [movieList, setMovieList] = useState([]);
  return (
    <div>
      <MenuBar />
      <h1>みんなの映画リスト</h1>
      <p>・みんなで見たいホラー映画</p>
      <p>・ノンフィクション</p>
      <p>・泣けるロマンス</p>
    </div>
  );
};
