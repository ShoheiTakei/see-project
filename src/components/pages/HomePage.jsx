import styled from 'styled-components';
import { Button } from '@mui/material';
import { MenuBar } from '../MenuBar';
import { useEffect } from 'react';
import { db } from '../../../apis/firebase/config';
import { doc, onSnapshot } from 'firebase/firestore';

export const HomePage = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    new Promise((resolve) => {
      onSnapshot(doc(db, 'users', 'test'), (doc) => {
        resolve(doc.data());
      });
    })
      .then((value) => {
        setMovieList(value);
      })
      .catch((e) => console.log(e))
      .finally(() => console.log(movieList));
  }, []);
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
