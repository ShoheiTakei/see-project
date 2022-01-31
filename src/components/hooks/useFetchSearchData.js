import { useState, useCallback } from 'react';
import axios from 'axios';
import { API_KEY } from '../../api/requests';
export const useFetchSearchData = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);

  // const onChangeSearchWord = useCallback((event) => {
  //   console.log('onChangeが実行されました');
  //   const searchWord = event.target.value;
  //   setInputText(searchWord);
  // }, []);

  const changeInputText = (text) => {
    setInputText(text);
    console.log(inputText);
  };

  // const handleClick = useCallback(() => {
  //   console.log('ボタンが押されました');
  //   fetchData();
  // }, []);

  // async function fetchData() {
  //   console.log('fetchData()が実行されました');
  //   setLoading(true);
  //   await axios.get
  //   'https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=ja-JA&query=%${inputText}&page=1&include_adult=false'
  //     .then(function (response) {
  //       console.log('thenです');
  //       setSearchResults(response.data.results);
  //     })
  //     .catch(function (error) {
  //       console.log(`エラーは${error}`);
  //     })
  //     .finally(function () {
  //       console.log('finallyです');
  //       setShowSearchResults(true);
  //       setLoading(false);
  //     });
  // }

  async function fetchData() {
    console.log('fetchData()が実行されました');
    setLoading(true);
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=ja-JA&query=%${inputText}&page=1&include_adult=false`
      );
      const items = res.data.results;
      setSearchResults(items);
    } catch (error) {
      console.log(error);
    } finally {
      console.log('finallyです');
      setShowSearchResults(true);
      setLoading(false);
    }
  }

  return {
    searchResults,
    loading,
    showSearchResults,
    changeInputText,
    fetchData,
  };
};

// onChangeSearchWord,
//     handleClick,

// https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=ja-JA&query=%${inputText}&page=1&include_adult=false
