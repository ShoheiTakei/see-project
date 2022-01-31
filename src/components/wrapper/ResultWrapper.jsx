import { PosterCard } from '../card/PosterCard';
import CircularProgress from '@mui/material/CircularProgress';
import { useFetchSearchData } from '../hooks/useFetchSearchData';

export const ResultWrapper = () => {
  const { loading, searchResults, showSearchResults } = useFetchSearchData();

  return (
    <div className="resultWrapper">
      {searchResults.map((movie, key) => {
        return <PosterCard movie={movie} key={key} />;
      })}
    </div>
  );
};

/* {showSearchResults &&
        (searchRes.length > 0 ? (
          <>
            <>
              <p>検索結果が見つかりました。</p>
            </>
            <ResultWrapper searchResults={searchResults} />
          </>
        ) : (
          <>
            <p>検索結果が見つかりませんでした。</p>
          </>
        ))} */

//         { showSearchResults &&
//       searchResults.length > 0 ? (
//           <p>検索結果が見つかりました。</p>
//         <div className="resultWrapper">
//           {searchResults.map((movie, key) => {
//             return loading ? (
//               <CircularProgress />
//             ) : (
//               <PosterCard movie={movie} key={key} />
//             );
//           })}
//         </div>
//     ) : (
//         <p>検索結果が見つかりませんでした。</p>
//     )});
// };
