import { useFetchMovies } from '../hooks/useFetchMovies';

export const SearchInput = () => {
  const { changeInputValue } = useFetchMovies();
  return (
    <input
      onChange={changeInputValue}
      type="search"
      placeholder="映画のタイトルを入力する"
    />
  );
};
