import styled from 'styled-components';
import axios from 'axios';
import { memo, useCallback, useState } from 'react';
import { API_KEY } from '../../api/requests';
import { Button } from '@mui/material';

export const SearchPage = memo(() => {
  const base_url = 'https://image.tmdb.org/t/p/original';
  const [searchResults, setSearchResults] = useState([]);
  const [inputText, setInputText] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);

  const onChangeSearchWord = (event) => {
    const searchWord = event.target.value;
    setInputText(searchWord);
  };

  const judgeResult = (res) => {
    res.length > 0
      ? console.log('検索結果が見つかりました。')
      : console.log('検索結果が見つかりませんでした。');
  };

  const handleClick = useCallback(() => {
    fetchData();
  }, [inputText]);

  // 映画データを取得できなかった場合のアクションを追加する
  async function fetchData() {
    console.log('fetchData実行されました');
    await axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=ja-JA&query=%${inputText}&page=1&include_adult=false`
      )
      .then(function (response) {
        judgeResult(response.data.results);
        // handle success
        setSearchResults(response.data.results);
      })
      .catch(function (error) {
        // handle error
        console.log(`エラーは${error}`);
      })
      .finally(function () {
        console.log('finallyです');
        setShowSearchResults(true);
      });
  }

  return (
    <SearchPageWrapper>
      {/* ---------------debug用console ---------*/}
      {}
      {/* --------------------------- */}

      <input
        onChange={onChangeSearchWord}
        type="search"
        placeholder="映画のタイトルを入力する"
      />
      <Button color="primary" variant="contained" onClick={() => handleClick()}>
        検索
      </Button>
      {showSearchResults &&
        (searchResults.length > 0 ? (
          <>
            <>
              <p>検索結果が見つかりました。</p>
            </>
            <div className="resultWrapper">
              {searchResults.map((movie, key) => {
                return (
                  <img
                    key={key}
                    className="poster"
                    src={`${base_url}${movie.poster_path}`}
                    alt={movie.name}
                  />
                );
              })}
            </div>
          </>
        ) : (
          <>
            <p>検索結果が見つかりませんでした。</p>
          </>
        ))}
    </SearchPageWrapper>
  );
});

const SearchPageWrapper = styled.div`
  font-size: 3rem;
  text-align: center;
  Button {
    margin-top: 3rem;
    width: 100px;
    font-size: 2rem;
  }
  input {
    border: 2px solid #ffff;
    border-radius: 0.67rem;
    margin-top: 3rem;
    ::placeholder {
      text-align: center;
      line-height: normal;
      font-size: 2rem;
      font-weight: bold;
    }
  }
  .resultWrapper {
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    img {
      width: 60rem;
      max-height: 65rem;
      margin: 5rem;
      object-fit: contain;
      transition: transform 450ms;
      &:hover {
        transform: scale(1.08);
      }
    }
  }
`;

// const SearchButton = styled(Button)`
//   width: 3rem;
//   height: 1.5rem;
//   color: red;
// `;
