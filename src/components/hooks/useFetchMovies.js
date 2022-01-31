import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { API_KEY } from '../../api/requests';
import axios from 'axios';

export const useFetchMovies = () => {
  console.log('レンダリングされました');
  const [searchWord, setSearchWord] = useState('アイアンマン');

  const changeInputValue = (event) => {
    const inputValue = event.target.value;
    setSearchWord(inputValue);
  };

  const fetchMovies = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=ja-JA&query=%${searchWord}&page=1&include_adult=false`
    );
    return res.data.results;
  };

  const results = useQuery('movies', fetchMovies);

  return {
    changeInputValue,
    fetchMovies,
    results,
  };
};
