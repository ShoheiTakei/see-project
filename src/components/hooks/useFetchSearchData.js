import { useState } from 'react';
import axios from 'axios';
import { API_KEY } from '../../api/requests';

export const useFetchSearchData = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);

  // 非同期で映画情報を取得する関数
  // エラー inputValueをクエリパラメーターに埋め込みたいけど、ここまで来てくれない
  async function fetchData() {
    console.log('fetchData()が実行されました');
    setLoading(true);
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27&language=ja-JP`
      );
      const items = res.data.results;
      console.log(items);
      setSearchResults(items);
    } catch (error) {
      console.log(error);
    } finally {
      console.log('finallyです');
      setShowSearchResults(true);
      setLoading(false);
    }
  }

  return { loading, searchResults, showSearchResults, fetchData };
};

// onChangeSearchWord,
//     handleClick,

// https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=ja-JA&query=%${inputText}&page=1&include_adult=false
